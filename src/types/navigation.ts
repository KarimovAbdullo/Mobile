import R from 'res'

export type TNavigationParams = {
  [R.routes.SCREEN_LOGIN]:
    | undefined
    | undefined
    | { code?: string; onSubmit?: () => void }

  [R.routes.SCREEN_DETAIL]: { item: string }
}
