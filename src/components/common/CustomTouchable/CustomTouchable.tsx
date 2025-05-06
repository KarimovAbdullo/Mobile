import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import stylesConfig from './CustomTouchable.styles'

export const CustomTouchable = ({
  onPress,
  style,
  disabledOpacity = false,
  disabled,
  ...attributes
}: TouchableOpacityProps & { disabledOpacity?: boolean }) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.93 : 1}
      onPress={onPress}
      disabled={disabled}
      style={[style, disabled && disabledOpacity && styles.disabled]}
      {...attributes}
    />
  )
}
