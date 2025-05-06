import { Dimensions, Platform } from 'react-native'
import Config from 'react-native-config'
export const TEST = ''
export const APP_SCHEME = Config.APP_SCHEME as string
export const WEB_URL = Config.WEB_URL as string

export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = !IS_ANDROID

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

export const COOLDOWN_TIME = 60000
