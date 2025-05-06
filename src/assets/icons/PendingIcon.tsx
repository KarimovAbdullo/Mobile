import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Circle } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
  strokeWidth?: string
}

const PendingdIcon = (props: IProps) => {
  const { color = '#fff', size = 54 } = props

  return (
    <Svg
      width={s(size)}
      height={s((54 / 54) * size)}
      fill="none"
      viewBox="0 0 54 54">
      <Circle cx={27} cy={27} r={27} fill={color} opacity={0.1} />
    </Svg>
  )
}

export default PendingdIcon
