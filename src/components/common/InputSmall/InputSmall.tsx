import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import CustomTouchable from 'components/common/CustomTouchable'
import { Space } from 'components/common/Space'
import { useField, useFormikContext } from 'formik'
import { useColors } from 'hooks/useColors.ts'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, useCallback, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import CustomText from '../CustomText'
import stylesConfig from './InputSmall.styles'

export interface IInputSmallProps extends TextInputProps {
  name: string
  validate?: (value: string) => string | undefined
  innerRef?: React.RefObject<TextInput>
  inputStyle?: Object
  label?: string
  labelStyle?: Object
  leftIcon?: ReactElement
  onLeftIconPress?: () => void
  rightIcon?: ReactElement
  onRightIconPress?: () => void
  disabled?: boolean
  hideError?: boolean
  bottomSheetInput?: boolean
  immediatelyShowError?: boolean
  textType?: 'bold' | 'regular'
}

export const InputSmall = (props: IInputSmallProps) => {
  const {
    name,
    label,
    validate,
    innerRef,
    labelStyle,
    leftIcon,
    onLeftIconPress,
    rightIcon,
    onRightIconPress,
    bottomSheetInput = false,
    placeholderTextColor,
    disabled,
    editable,
    inputStyle,
    hideError,
    immediatelyShowError = false,
    textType = 'regular',
    style,
    ...attributes
  } = props
  const styles = useStyles(stylesConfig)
  const [field, meta, helpers] = useField({ name, validate })
  const colors = useColors()
  const [leftFocus, setLeftFocus] = useState(false)
  const { submitCount } = useFormikContext()

  const onFocus = useCallback(() => {
    setLeftFocus(false)

    helpers.setTouched(true)
  }, [])

  const onBlur = useCallback(() => {
    setLeftFocus(true)
  }, [])

  const onChangeText = useCallback(async (value: string) => {
    const formattedValue =
      attributes.keyboardType === 'numeric' ? value.replace(',', '.') : value

    helpers.setValue(formattedValue)
  }, [])

  const InputComponent = bottomSheetInput ? BottomSheetTextInput : TextInput

  const showError =
    ((submitCount || leftFocus) && meta.error && !hideError) ||
    (immediatelyShowError && meta.error)

  return (
    <View style={[style]}>
      {label ? (
        <CustomText size={13} style={[styles.label, labelStyle]}>
          {label}
        </CustomText>
      ) : null}

      <View>
        {leftIcon ? (
          <CustomTouchable
            onPress={onLeftIconPress}
            style={[
              styles.leftIcon,
              innerRef?.current?.isFocused() ? styles.activeIcon : {},
            ]}>
            {leftIcon}
          </CustomTouchable>
        ) : null}

        <InputComponent
          style={[
            styles.input,
            leftIcon && styles.inputLeftIcon,
            rightIcon && styles.inputRightIcon,
            textType === 'bold' && styles.boldText,
            textType === 'regular' && styles.regularText,
            inputStyle,
          ]}
          // @ts-ignore
          ref={innerRef}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          value={String(field.value || '')}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : colors.graySecondaryText
          }
          editable={!disabled && editable}
          {...attributes}
        />

        {rightIcon ? (
          <CustomTouchable
            onPress={onRightIconPress}
            style={[
              styles.rightIcon,
              innerRef?.current?.isFocused() && styles.activeIcon,
            ]}>
            {rightIcon}
          </CustomTouchable>
        ) : null}
      </View>

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
