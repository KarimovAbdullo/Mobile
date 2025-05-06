import CustomText from 'components/common/CustomText'
import { Space } from 'components/common/Space'
import React, { memo, ReactNode } from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters/extend'

import Columns from '../Columns'

interface ICustomHeaderProps {
  title?: string
  subtitle?: string
  row?: boolean
  icon?: ReactNode
  columnContainer?: boolean
}

export const CustomHeader: React.FC<ICustomHeaderProps> = memo(props => {
  return (
    <Columns
      columnContainer={props.columnContainer}
      align={props.row ? 'flex-end' : 'flex-start'}
      justify={props.row ? 'space-between' : 'flex-start'}>
      {!!props.title && <CustomText children={props.title} size={30} bold />}

      <Space height={props.subtitle ? 24 : 0} />

      {!!props.subtitle && (
        <Columns>
          {props.icon && (
            <View style={{ paddingRight: s(8) }}>{props.icon}</View>
          )}

          <CustomText
            style={{ marginBottom: props.row ? s(5) : s(0) }}
            children={props.subtitle}
            color="graySecondaryText"
            size={props.row ? 12 : 16}
            mediumItalic={props.row ? true : false}
          />
        </Columns>
      )}
    </Columns>
  )
})
