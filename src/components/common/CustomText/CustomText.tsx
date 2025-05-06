import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, ReactNode } from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { TThemeColors } from 'res/theme'

import stylesConfig from './CustomText.styles.ts'

interface IProps extends TextProps {
  children:
    | ReactNode
    | ReactElement
    | string
    | string[]
    | number
    | (string | number)[]
  center?: boolean
  size?: 16 | 14 | 13 | 30 | 12 | 17 | 11 | 24
  style?: StyleProp<TextStyle>
  numberOfLines?: number
  color?: keyof TThemeColors
  opacity?: number
  flex?: boolean
  right?: boolean
  underline?: boolean
  lineThrough?: boolean
  heightOff?: boolean

  regular?: boolean
  regularItalic?: boolean
  bold?: boolean
  boldItalic?: boolean
  medium?: boolean
  mediumItalic?: boolean
  semiBold?: boolean
  semiBoldItalic?: boolean
}

export const CustomText: React.FC<IProps> = ({
  size = 16,
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
  opacity = 1,
  flex = false,
  right = false,
  underline = false,
  lineThrough = false,
  heightOff = false,

  regular = true,
  regularItalic = false,
  bold = false,
  boldItalic = false,
  semiBold = false,
  semiBoldItalic = false,
  medium = false,
  mediumItalic = false,

  ...attributes
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles[size],
        center && styles.center,
        right && styles.right,
        colorStyle,
        flex && styles.flex,
        underline && styles.underline,
        lineThrough && styles.lineThrough,
        heightOff && styles.heightOff,
        style,
        { opacity },

        regular && styles.regular,
        regularItalic && styles.regularItalic,
        bold && styles.bold,
        boldItalic && styles.boldItalic,
        semiBold && styles.semiBold,
        semiBoldItalic && styles.semiBoldItalic,
        medium && styles.medium,
        mediumItalic && styles.mediumItalic,
      ]}
      suppressHighlighting={true}
      {...attributes}>
      {children}
    </Text>
  )
}
