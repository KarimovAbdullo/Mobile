import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Circle, G, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const TronIcon = (props: IProps) => {
  const { color = '#EF0027', size = 32 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 32 32">
      <G fill="none">
        <Circle fill={color} cx="16" cy="16" r="16" />

        <Path
          d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )
}

export default TronIcon
