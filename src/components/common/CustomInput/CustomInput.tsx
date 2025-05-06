import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { useField, useFormikContext } from 'formik'
import { useColors } from 'hooks/useColors.ts'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, useCallback, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import CustomText from '../CustomText'
import CustomTouchable from '../CustomTouchable'
import { Space } from '../Space'
import stylesConfig from './CustomInput.styles'

export interface ICustomInputProps extends TextInputProps {
  name: string
  validate?: (value: string) => string | undefined
  innerRef?: React.RefObject<TextInput>
  inputStyle?: Object
  label?: string
  labelStyle?: Object
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  disabled?: boolean
  hideError?: boolean
  bottomSheetInput?: boolean
  immediatelyShowError?: boolean
  textType?: 'bold' | 'regular'
  onPressRigtIcon?: () => void
}

export const CustomInput = (props: ICustomInputProps) => {
  const {
    name,
    label,
    validate,
    innerRef,
    labelStyle,
    leftIcon,
    rightIcon,
    bottomSheetInput = false,
    placeholderTextColor,
    disabled,
    editable,
    inputStyle,
    hideError,
    immediatelyShowError = false,
    textType = 'regular',
    style,
    onPressRigtIcon,
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
    <View style={[styles.input_container, style]}>
      <View style={{ flexDirection: 'row' }}>
        {leftIcon ? (
          <CustomTouchable
            style={[
              styles.leftIcon,
              innerRef?.current?.isFocused() ? styles.activeIcon : {},
            ]}>
            {leftIcon}
          </CustomTouchable>
        ) : null}

        <View style={[styles.input_content]}>
          {field.value && label ? (
            <CustomText
              size={12}
              color="graySecondaryText"
              medium
              heightOff
              style={[styles.label, labelStyle]}>
              {label}
            </CustomText>
          ) : null}

          <InputComponent
            keyboardType="default"
            style={[
              styles.input,
              textType === 'bold' && styles.boldText,
              textType === 'regular' && styles.regularText,
              inputStyle,
            ]}
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
            numberOfLines={1}
            {...attributes}
          />
        </View>
      </View>

      {rightIcon ? (
        <CustomTouchable
          onPress={onPressRigtIcon}
          style={[
            styles.rightIcon,
            innerRef?.current?.isFocused() && styles.activeIcon,
          ]}>
          {rightIcon}
        </CustomTouchable>
      ) : null}

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
