import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Circle } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const DotsIcon = (props: IProps) => {
  const { color = '#304497', size = 10 } = props

  return (
    <Svg
      width={s(size)}
      height={s((26 / 10) * size)}
      viewBox="0 0 10 26"
      fill="none">
      <Circle cx="5" cy="5" r="2" fill={color} />
      <Circle cx="5" cy="13" r="2" fill={color} />
      <Circle cx="5" cy="21" r="2" fill={color} />
    </Svg>
  )
}

export default DotsIcon
