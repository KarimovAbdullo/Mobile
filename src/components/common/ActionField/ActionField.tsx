import CustomTouchable from 'components/common/CustomTouchable'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import Columns from '../Columns'
import CustomText from '../CustomText'
import { Space } from '../Space'
import stylesConfig from './ActionField.styles'

export interface IActionFieldProps {
  name?: string
  value?: string
  onHendleIcon?: (() => void) | undefined
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  placeholder: string
  blueValue?: boolean
}

const ActionField = ({
  name,
  onHendleIcon,
  rightIcon,
  value,
  leftIcon,
  placeholder,
  blueValue = false,
}: IActionFieldProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <CustomTouchable onPress={onHendleIcon}>
      <Columns align="center" justify="space-between" style={styles.container}>
        <Columns align="center">
          {leftIcon}

          {leftIcon && <Space width={16} />}

          {value || name ? (
            <View>
              {name && (
                <CustomText size={12} color="graySecondaryText" medium>
                  {name}
                </CustomText>
              )}

              <CustomText color={blueValue ? 'blue' : 'black'} size={16}>
                {value}
              </CustomText>
            </View>
          ) : (
            <CustomText size={16} color={'graySecondaryText'}>
              {placeholder}
            </CustomText>
          )}
        </Columns>

        <Space width={16} />

        <View>{rightIcon}</View>
      </Columns>
    </CustomTouchable>
  )
}

export default ActionField
