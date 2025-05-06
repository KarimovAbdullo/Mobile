import React from 'react'
import { ColorValue, StyleProp, View, ViewStyle } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  direction?: 'top' | 'bottom' | 'left' | 'right'
  color?: ColorValue
  size?: number
  fill?: boolean
  strokeWidth?: string
}

const direction_value = {
  top: [{ rotateZ: '180deg' }],
  bottom: [{ rotateZ: '0deg' }],
  left: [{ rotateZ: '90deg' }],
  right: [{ rotateZ: '-90deg' }],
}

const CarrotIcon = (props: IProps) => {
  const {
    color = 'black',
    direction = 'right',
    size = 18,
    fill = false,
    strokeWidth = '1.5',
  } = props

  const style: StyleProp<ViewStyle> = {
    transform: direction_value[direction],
    justifyContent: 'center',
  }

  return (
    <View style={style}>
      <Svg
        width={s(size)}
        height={s(size)}
        viewBox="0 0 18 18"
        fill={fill ? color : 'none'}>
        <Path
          d="M13.5 6.75L9 11.25L4.5 6.75"
          stroke={!fill ? color : 'none'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}

export default CarrotIcon
