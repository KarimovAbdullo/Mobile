import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosRequestConfig } from 'axios'
import { API_BASE_URL, API_REFRESH_TOKEN } from 'res/urls.ts'
// import { Platform } from 'react-native'
// import DeviceInfo from 'react-native-device-info'
import { persistor, store } from 'state'
import { setRefreshTokenAction, signOutUserAction } from 'state/user/actions'
import { IRefreshToken } from 'types/data'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

export const objectToJson = (obj: Record<string, unknown>): string => {
  return JSON.stringify(obj, null, 0)
}

apiClient.interceptors.request.use(
  async request => {
    const { accessToken } = store.getState().user
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request
  },
  error => {
    return Promise.reject(error)
  },
)

interface RetryQueueItem {
  resolve: (value?: any) => void

  reject: (error?: any) => void
  config: AxiosRequestConfig
}

const refreshAndRetryQueue: RetryQueueItem[] = []
let isRefreshing = false

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest: AxiosRequestConfig = error.config
    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true
        try {
          const refreshToken = store.getState()?.user.refreshToken

          const { data: refreshResponse } = await axios.post<IRefreshToken>(
            API_BASE_URL + API_REFRESH_TOKEN,
            {
              refreshToken: refreshToken,
            },
          )
          store.dispatch(setRefreshTokenAction(refreshResponse))
          error.config.headers.Authorization = `Bearer ${refreshResponse?.accessToken}`

          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            apiClient
              .request(config)
              .then(response => resolve(response))
              .catch(err => reject(err))
          })

          refreshAndRetryQueue.length = 0

          return apiClient(originalRequest)
        } catch (refreshError) {
          await AsyncStorage.clear()
          await persistor.purge()
          store.dispatch(signOutUserAction())

          throw refreshError
        } finally {
          isRefreshing = false
        }
      }

      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject })
      })
    }

    return Promise.reject(error)
  },
)

// @ts-ignore
// apiClient.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config
//
//     if (error?.response?.data?.message === 'Account not found') {
//       return store.dispatch(signOutUserAction())
//     }
//
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       const state = store.getState() as RootState
//       const refreshToken = state.user?.refreshToken
//       const accessToken = state.user?.accessToken
//
//       if (refreshToken && accessToken) {
//         try {
//           const { data: response } = await axios.post<IRefreshToken>(
//             API_BASE_URL + API_REFRESH_TOKEN,
//             {
//               refreshToken: refreshToken,
//             },
//             // {
//             //   headers: {
//             //     authorization: `Bearer ${accessToken}`,
//             //   },
//             // },
//           )
//
//           if (response) {
//             store.dispatch(setRefreshTokenAction(response))
//             return apiClient(originalRequest)
//           }
//         } catch {
//           store.dispatch(signOutUserAction())
//           return
//         }
//       }
//     }
//
//     return Promise.reject(error)
//   },
// )

export default apiClient
