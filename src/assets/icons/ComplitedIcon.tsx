import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Circle, Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
  strokeWidth?: string
}

const ComplitedIcon = (props: IProps) => {
  const { color = '#fff', size = 54 } = props

  return (
    <Svg
      width={s(size)}
      height={s((54 / 54) * size)}
      fill="none"
      viewBox="0 0 54 54">
      <Circle cx={27} cy={27} r={27} fill={color} opacity={0.1} />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 26.647 25.095 33 35 21"
      />
    </Svg>
  )
}

export default ComplitedIcon
