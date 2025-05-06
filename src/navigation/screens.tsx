import R from 'res'
import DetailScreen from 'screens/Detail'
import LoginScreen from 'screens/Login'
import { TNavigationParams } from 'types/navigation'

type SCREEN_TYPE = Record<string, any> & {
  name: keyof TNavigationParams
  title?: string
  hideHeader?: boolean
  blockSwipe?: boolean
  headerStyle?: string
  isLogin?: boolean
}

const ROUTES_SCREENS: SCREEN_TYPE[] = [
  {
    name: R.routes.SCREEN_LOGIN,
    component: LoginScreen,
    title: 'Drivers',
    isLogin: true,
  },

  {
    name: R.routes.SCREEN_DETAIL,
    component: DetailScreen,
    title: '',
    isLogin: true,
  },
]

export default ROUTES_SCREENS
