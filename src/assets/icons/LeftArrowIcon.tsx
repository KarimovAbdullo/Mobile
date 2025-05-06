import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
  strokeWidth?: string
}

const LeftArrowIcon = (props: IProps) => {
  const { color = '#1B1726', size = 18, strokeWidth = '2' } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 1L1 9L9 17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 9H17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default LeftArrowIcon
