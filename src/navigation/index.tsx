import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CustomText from 'components/common/CustomText'
import CustomToast from 'components/common/CustomToast'
import { useAppSelector } from 'hooks/redux'
import linking from 'navigation/linking.ts'
import ROUTES_SCREENS from 'navigation/screens'
import React from 'react'
import { Platform } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { s, vs } from 'react-native-size-matters/extend'
import Toast from 'react-native-toast-message'
import R from 'res'
import { TTheme } from 'res/theme'
import { getUserSelector } from 'state/user/selectors'
import { TNavigationParams } from 'types/navigation'
import {
  getDefaultScreenOptions,
  getFastTransitionParams,
} from 'utils/navigation.ts'

const toastConfig = {
  default: ({ props }: { props: any }) => <CustomToast {...props} />,
}

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator<TNavigationParams>()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()

  const { accessToken } = useAppSelector(getUserSelector)

  const customInitialRouteName = () => {
    if (!accessToken) {
      return R.routes.SCREEN_LOGIN
    }
  }

  const buildStackScreens = () => {
    return ROUTES_SCREENS.map((route, index) => {
      if (!accessToken && !route.isLogin) {
        return
      }

      return (
        <RootStack.Screen
          key={index.toString()}
          component={route.component}
          name={route.name}
          options={{
            title: route.title,
            headerShown: !route.hideHeader,
            headerTitleAlign: 'center',
            gestureEnabled: !route.blockSwipe,
            headerTitle: () => (
              <CustomText
                color={
                  R.routes.SCREEN_SELL || R.routes.SCREEN_PROFILE
                    ? 'black'
                    : 'textSecondary'
                }
                bold={
                  R.routes.SCREEN_SELL || R.routes.SCREEN_PROFILE ? true : false
                }
                size={
                  R.routes.SCREEN_SELL || R.routes.SCREEN_PROFILE ? 16 : 12
                }>
                {route.title}
              </CustomText>
            ),
            headerLeft: props => (
              <Pressable
                {...props}
                hitSlop={{
                  left: s(10),
                  right: s(16),
                  top: s(10),
                  bottom: s(10),
                }}
                style={{
                  opacity: props.canGoBack ? 1 : 0,
                  marginLeft: s(10),
                  top:
                    route.title && typeof route.title !== 'string' ? vs(-4) : 0,
                }}>
                <R.icons.ArrowLeft />
              </Pressable>
            ),
            ...getDefaultScreenOptions(theme.colors, route.name),
            ...(route.fastTransition ? getFastTransitionParams() : {}),
            headerStyle: {
              backgroundColor: route.headerStyle,
              elevation: 0,
              shadowOpacity: 0,
              height: Platform.select({ android: vs(65) }),
            },
          }}
        />
      )
    })
  }

  return (
    <NavigationContainer theme={theme} ref={navigationRef} linking={linking}>
      <BottomSheetModalProvider>
        <RootStack.Navigator
          initialRouteName={customInitialRouteName()}
          screenOptions={{ headerShown: false }}>
          <>
            {/*<RootStack.Screen name={R.routes.ROOT_MAIN} component={Tabs} />*/}
            {buildStackScreens()}
          </>
        </RootStack.Navigator>
      </BottomSheetModalProvider>

      <Toast
        position="bottom"
        type="default"
        config={toastConfig}
        visibilityTime={2500}
        bottomOffset={vs(50)}
      />
    </NavigationContainer>
  )
}

export default Navigator
