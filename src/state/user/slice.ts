import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { UserState } from 'state/user/types'

import { getDriverResults, getDrivers } from './actions'

export const initialStateUser: UserState = {
  drivers: [],
  offset: 0,
  getDriversLoading: false,
  accessToken: null,
  refreshToken: null,
  getRacesLoading: false,
  racesData: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDrivers.pending, state => {
        state.getDriversLoading = true
      })
      .addCase(getDrivers.fulfilled, (state, action) => {
        state.getDriversLoading = false
        state.drivers = action.payload
      })
      .addCase(getDrivers.rejected, state => {
        state.getDriversLoading = false
      })
    builder
      .addCase(getDriverResults.pending, state => {
        state.getRacesLoading = true
      })
      .addCase(getDriverResults.fulfilled, (state, action) => {
        state.getRacesLoading = false
        state.racesData = action.payload
      })
      .addCase(getDriverResults.rejected, state => {
        state.getRacesLoading = false
      })
  },
})

const persistConfig: PersistConfig<UserState> = {
  key: 'drivers',
  storage: AsyncStorage,
  whitelist: ['drivers'],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
