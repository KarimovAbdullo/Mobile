import { IDriver, RaceResult } from 'types/data'

export type UserState = {
  drivers: IDriver[]
  offset: number
  getDriversLoading: boolean
  accessToken: null
  refreshToken: null
  getRacesLoading: boolean
  racesData: RaceResult[]
}
