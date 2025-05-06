import React, { ReactNode, useEffect } from 'react'
import {
  EmitterSubscription,
  Keyboard,
  KeyboardEventListener,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { IS_IOS } from 'res/consts'

interface IProps {
  children: ReactNode
  offsetPercentOfKeyboard?: number
  offsetKeyboard?: number
}

const AnimatedContainerWithKeyboard = (props: IProps) => {
  const { children, offsetPercentOfKeyboard = 0.1, offsetKeyboard = 0 } = props
  const keyboardHeight = useSharedValue(0)

  let subscribeShow: EmitterSubscription | null = null
  let subscribeHide: EmitterSubscription | null = null

  useEffect(() => {
    const onKeyboardShow: KeyboardEventListener = event => {
      keyboardHeight.value = withTiming(
        event.endCoordinates.height + (IS_IOS ? offsetKeyboard : 0),
        {
          duration: event.duration,
        },
      )
    }

    const onKeyboardHide: KeyboardEventListener = event => {
      keyboardHeight.value = withTiming(0, {
        duration: event.duration,
      })
    }

    if (IS_IOS) {
      subscribeShow = Keyboard.addListener('keyboardWillShow', onKeyboardShow)
      subscribeHide = Keyboard.addListener('keyboardWillHide', onKeyboardHide)
    } else {
      subscribeShow = Keyboard.addListener('keyboardDidShow', onKeyboardShow)
      subscribeHide = Keyboard.addListener('keyboardDidHide', onKeyboardHide)
    }

    return () => {
      subscribeShow?.remove?.()
      subscribeHide?.remove?.()
    }
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: IS_IOS
            ? -keyboardHeight.value
            : -keyboardHeight.value * offsetPercentOfKeyboard,
        },
      ],
      flex: 1,
    }
  })

  return <Animated.View style={rStyle}>{children}</Animated.View>
}

export default AnimatedContainerWithKeyboard
