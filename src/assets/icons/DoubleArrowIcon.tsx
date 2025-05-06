import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const DoubleArrowIcon = (props: IProps) => {
  const { color = '#1B1726', size = 32 } = props
  return (
    <Svg
      height={s((33 / 32) * size)}
      fill="none"
      width={s(size)}
      viewBox="0 0 32 32">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m20 26 5-5-5-5M12 6l-5 5 5 5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2}
        d="M25 21H13M7 11h12"
      />
    </Svg>
  )
}

export default DoubleArrowIcon
