export interface IUserRequest {
  email?: string
  password: string
  applicationDeviceId?: string
  devicePlatform?: string
  name?: string
  os?: string
  model?: string
}

export interface IUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  hasPassword: boolean
  mfaConfirmed: boolean
  accountBalance: {
    fiat: number
    crypto: { [key: string]: number }
  }

  kycStatus: 'not_initiated'
  emailNotify: null
  avatarUrl: null
}

interface ITokens {
  accessToken: string | null
  refreshToken: string | null
}

export interface ILogin {
  tokens: ITokens
  user: IUser
}

export interface ICreatePasswordRequest {
  password: string
}

export interface IBuyParams {
  asset: string
  fiatVolume: number
}

export interface ISellParams {
  asset: string
  assetVolume: number
}

export interface ExchangeSwapParams {
  assetFrom: string
  volumeFrom: number
  assetTo: string
}

export interface IExchangeSwapResponse {
  errorMessage: string
  transactionId: string
  orderMessage: string
}

export interface IAssetListParams {
  userUuid: string
}

export interface GetAssetListResponse {
  errorMessage: string
  assets: Asset[]
}

export interface Asset {
  asset: string
  name: string
  allowedPairs: string[]
  exchangeFeeRates: ExchangeFeeRate[]
}

export interface ExchangeFeeRate {
  pair: string
  rates: Rate[]
}

export interface Rate {
  additionalProp1: number
  additionalProp2: number
  additionalProp3: number
}

export interface ITransactionHistoryParams {
  asset: string | null
  dateFrom: string | null
  dateTo: string | null
  page: number
  pageSize: number
}

export interface TransactionDetails {
  transactionId: string | null
  baseAsset: string | null
  quoteAsset: string | null
}

export interface IDetailInfo {
  transactionId: string | null
  baseAsset?: string
  quoteAsset?: string
  direction: string | null
  orderType: string | null
  status: string | null
  reason: string | null
  volumeOrdered: string | null
  volumeExecuted: string | null
  price: string | null
  cost: string | null
  fee: string | null
  exchangeRate: string | null
  updated: string | null
  opened: string | null
  closed: string | null
}

export interface ExchangeResponse {
  errorMessage: string | null
  detailedInfo: IDetailInfo | null
}

export interface IRefreshToken {
  type: string
  accessToken: string
  refreshToken: string
}

export interface TransactionHistoryResponse {
  totalElements: number
  totalPages: number
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  first: boolean
  last: boolean
  number: number
  pageable: {
    page: number
    size: number
    sort: string[]
  }
  numberOfElements: number
  size: number
  empty: boolean
  content: ExchangesData[]
}

export interface ExchangesData {
  baseAsset: string
  quoteAsset: string
  direction: string
  orderType: string
  status: string
  reason: string
  volumeOrdered: number
  volumeExecuted: number
  volumeExecMode: string
  cost: number
  exchangeRate: number
  exchangeFee: number
  exchangeFeeCurrency: string
  platformFee: number
  platformFeeCurrency: string
  updated: string
  opened: string
  closed: string
  swap: boolean
}

interface IPairPriceItems {
  tickerName: string
  updatedDate: string
  askPrice: string
  bidPrice: string
}

export interface IPairPricesResponse {
  pairPrices: IPairPriceItems[]
}

export interface IVerifyMfaCode {
  applicationDeviceId: string
  email: string
  code: string
}

export interface IMfaCode {
  qrCode: string
  mfaCode: string
}

export interface IVerifyCodeParams {
  code: string
  applicationDeviceId?: string
  devicePlatform?: string
  name?: string
  os?: string
  model?: string
}

export interface IPostPaymentsResponse {
  id: string
}

export interface IPostPaymentsParams {
  amount: number
  type: string
}

export interface IDriver {
  driverId: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
  permanentNumber?: string
  code?: string
}

export interface IDriversResponse {
  MRData: {
    DriverTable: {
      Drivers: IDriver[]
    }
  }
}

export interface DriverResult {
  number: string
  position: string
  positionText: string
  points: string
  Driver: {
    driverId: string
    permanentNumber?: string
    code?: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
  }
  Constructor: {
    constructorId: string
    url: string
    name: string
    nationality: string
  }
  grid: string
  laps: string
  status: string
  Time?: {
    millis?: string
    time: string
  }
  FastestLap?: {
    rank: string
    lap: string
    Time: {
      time: string
    }
    AverageSpeed: {
      units: string
      speed: string
    }
  }
}

export interface RaceResult {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: {
    circuitId: string
    url: string
    circuitName: string
    Location: {
      lat: string
      long: string
      locality: string
      country: string
    }
  }
  date: string
  time: string
  Results: DriverResult[]
}

export interface DriverResultsApiResponse {
  MRData: {
    RaceTable: {
      season: string
      round: string
      Races: RaceResult[]
    }
  }
}
