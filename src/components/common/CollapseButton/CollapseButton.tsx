import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Animated } from 'react-native'
import R from 'res'

import Columns from '../Columns'
import CustomText from '../CustomText'
import CustomTouchable from '../CustomTouchable'
import { Space } from '../Space'
import stylesConfig from './CollapseButton.styles'

interface ICollapse {
  name?: string
  children?: string
}

const CollapseButton = ({ name, children }: ICollapse) => {
  const [expanded, setExpanded] = useState(false)
  const [heightAnim] = useState(new Animated.Value(0))
  const [textSizeAnim] = useState(new Animated.Value(16))
  const [textColorAnim] = useState(new Animated.Value(0))
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const toggleExpansion = () => {
    setExpanded(!expanded)

    Animated.parallel([
      Animated.timing(textSizeAnim, {
        toValue: expanded ? 16 : 12,
        duration: 300,
        useNativeDriver: false,
      }),

      Animated.timing(textColorAnim, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }),

      Animated.timing(heightAnim, {
        toValue: expanded ? 0 : 100,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start()
  }

  const textColor = textColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.black, colors.graySecondaryText],
  })

  return (
    <CustomTouchable onPress={toggleExpansion} style={styles.container}>
      <Columns justify="space-between">
        <Animated.Text
          style={[{ fontSize: textSizeAnim }, { color: textColor }]}>
          {name}
        </Animated.Text>
        <Columns>
          <R.icons.CarrotIcon
            size={24}
            direction={expanded ? 'bottom' : 'right'}
          />
        </Columns>
      </Columns>

      <Animated.View style={[{ height: heightAnim }]}>
        <Space height={0} />
        <CustomText size={12} medium>
          {children}
        </CustomText>
      </Animated.View>
    </CustomTouchable>
  )
}

export default CollapseButton
