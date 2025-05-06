import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
  strokeWidth?: string
}

const SwapIcon = (props: IProps) => {
  const { color = '#fff', size = 29, strokeWidth = 2 } = props

  return (
    <Svg
      width={s(size)}
      height={s((30 / 29) * size)}
      fill="none"
      viewBox="0 0 29 30">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m19.25 25.75 5-5-5-5M9.25 4.25l-5 5.5 5 5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M24.25 20.75h-14M4.25 9.75h14"
      />
    </Svg>
  )
}

export default SwapIcon
