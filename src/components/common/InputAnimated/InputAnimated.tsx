import CustomText from 'components/common/CustomText'
import { Space } from 'components/common/Space'
import { useField, useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { ms, vs } from 'react-native-size-matters/extend'

import stylesConfig from './InputAnimated.styles'

interface IProps {
  label: string
  name: string
  secureTextEntry?: boolean
  validate?: (value: string) => string | undefined
  attributes?: TextInputProps
  immediatelyShowError?: boolean
  hideError?: boolean
}

export const InputAnimated = (props: IProps) => {
  const {
    label,
    secureTextEntry,
    name,
    validate,
    immediatelyShowError,
    hideError,
    attributes,
  } = props
  const styles = useStyles(stylesConfig)
  const [field, meta, helpers] = useField({ name, validate })
  const isFocused = useSharedValue(false)
  const [leftFocus, setLeftFocus] = useState(false)
  const { submitCount } = useFormikContext()

  useEffect(() => {
    if (field.value && !isFocused.value) {
      isFocused.value = true
    }
  }, [field.value])

  const handleFocus = () => {
    isFocused.value = true
    setLeftFocus(false)
  }

  const handleBlur = () => {
    setLeftFocus(true)
    if (!field.value) {
      isFocused.value = false
    }
  }

  const fontSize = ms(16)
  const fontSizeFocused = ms(12)
  const translateFocused = vs(-14)
  const lineHeight = ms(24)
  const lineHeightFocused = ms(20)

  const labelAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isFocused.value ? translateFocused : 0, {
            duration: 200,
          }),
        },
      ],
      fontSize: withTiming(isFocused.value ? fontSizeFocused : fontSize, {
        duration: 200,
      }),
      lineHeight: withTiming(isFocused.value ? lineHeightFocused : lineHeight, {
        duration: 200,
      }),
    }
  })

  const showError =
    ((submitCount || leftFocus) && meta.error && !hideError) ||
    (immediatelyShowError && meta.error)

  return (
    <View>
      <Animated.View style={[styles.container]}>
        <Animated.Text style={[styles.label, labelAnimatedStyle]}>
          {label}
        </Animated.Text>

        <TextInput
          style={styles.input}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={helpers.setValue}
          value={field.value}
          {...attributes}
        />
      </Animated.View>

      {showError ? (
        <View>
          <Space height={6} />
          <CustomText size={13} color="error">
            {meta.error}
          </CustomText>
        </View>
      ) : null}
    </View>
  )
}
