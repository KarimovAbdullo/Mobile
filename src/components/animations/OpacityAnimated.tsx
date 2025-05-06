import React, { ReactNode, useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

interface IProps {
  children: ReactNode
  delay?: number
  duration?: number
  style?: Object
  value?: number
}

const OpacityAnimated = (props: IProps) => {
  const { style, children, delay = 0, duration = 500, value = 1 } = props
  const process = useSharedValue(0)

  useEffect(() => {
    process.value = withDelay(delay, withTiming(value, { duration }))
  }, [value])

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: process.value,
    }
  })

  return <Animated.View style={[rStyle, style]}>{children}</Animated.View>
}

export default OpacityAnimated
