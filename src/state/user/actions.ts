import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import {
  DriverResultsApiResponse,
  IDriver,
  IDriversResponse,
  IRefreshToken,
  RaceResult,
} from 'types/data'

export const signOutUserAction = createAction('user/signOut')
export const setRefreshTokenAction = createAction<IRefreshToken>(
  'user/setRefreshToken',
)
export const setPasscodeAction = createAction<string>('user/setPasscode')

interface GetDriverResultsArgs {
  driverId: string
  onSuccess?: (data: RaceResult[]) => void
  onError?: (error: any) => void
}

export const getDrivers = createAsyncThunk<
  IDriver[],
  {
    offset: number
    onSuccess?: (data: IDriver[]) => void
    onError?: (e: any) => void
  }
>('user/getDrivers', async ({ offset, onSuccess, onError }, thunkAPI) => {
  try {
    const { data } = await apiClient.get<IDriversResponse>(
      `https://ergast.com/api/f1/drivers.json?limit=10&offset=${offset}`,
    )

    const drivers = data.MRData.DriverTable.Drivers

    onSuccess?.(drivers)
    return drivers
  } catch (e: any) {
    onError?.(e.response?.data || e.message)
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const getDriverResults = createAsyncThunk(
  'results/getDriverResults',
  async ({ driverId, onSuccess, onError }: GetDriverResultsArgs, thunkAPI) => {
    try {
      const response = await apiClient.get<DriverResultsApiResponse>(
        `https://ergast.com/api/f1/drivers/${driverId}/results.json`,
      )
      const races = response.data.MRData.RaceTable.Races
      onSuccess?.(races)
      return races
    } catch (error: any) {
      onError?.(error)
      return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
  },
)
