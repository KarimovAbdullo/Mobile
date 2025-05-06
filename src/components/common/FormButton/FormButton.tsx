import { useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { TThemeColors } from 'res/theme'

import stylesConfig from './FormButton.styles'

interface IProps {
  text: string
  onPress?: (() => void) | undefined
  transparent?: boolean
  stroke?: keyof TThemeColors
  style?: object
  textStyle?: object
  loading?: boolean
  disabled?: boolean
  disabledSecondStyle?: boolean
  disableSubmit?: boolean
  icon?: ReactNode
  disabledWhiteStyle?: boolean
}

const FormButton = ({
  text,
  onPress,
  transparent = false,
  style,
  textStyle,
  loading = false,
  disabled = false,
  disableSubmit = false,
  disabledSecondStyle = false,
  icon,
  disabledWhiteStyle = false,
}: IProps) => {
  const styles = useStyles(stylesConfig)
  const form = useFormikContext()

  const onSubmitPress = () => {
    if (!disableSubmit) {
      form.handleSubmit()
    }

    if (onPress) {
      onPress()
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading || !form.isValid}
      style={[
        styles.button,
        transparent ? styles.transparent : {},
        (disabled || !form.isValid) &&
          (disabledSecondStyle ? styles.disabledSecond : styles.disabled),
        disabledWhiteStyle && styles.disableWhite,
        style,
      ]}
      onPress={onSubmitPress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : icon ? (
        <View>{icon}</View>
      ) : (
        <Text
          style={[
            { color: 'white', fontSize: 16, lineHeight: 20, fontWeight: 700 },
            textStyle,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default FormButton
