import CustomTouchable from 'components/common/CustomTouchable'
import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { TThemeColors } from 'res/theme'

import CustomText from '../CustomText'
import stylesConfig from './ButtonSmall.styles'

export interface IButtonProps {
  text: string
  onPress?: (() => void) | undefined
  style?: object
  textStyle?: object
  loading?: boolean
  disabled?: boolean
  flex?: boolean
  loadingColor?: keyof TThemeColors
}

const ButtonSmall = ({
  onPress,
  text,
  style,
  textStyle,
  loading = false,
  disabled = false,
  flex = false,
  loadingColor = 'white',
}: IButtonProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <CustomTouchable
      disabled={disabled || loading}
      style={[
        styles.button,
        disabled && styles.disabled,
        flex && styles.flex,
        style,
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          color={loadingColor ? colors[loadingColor] : colors.white}
        />
      ) : (
        <CustomText style={[textStyle]} size={13} color="white" bold>
          {text}
        </CustomText>
      )}
    </CustomTouchable>
  )
}

export default ButtonSmall
