import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const BuyIcon = (props: IProps) => {
  const { color = '#fff', size = 20 } = props
  return (
    <Svg
      width={s(size)}
      height={s((21 / 20) * size)}
      fill="none"
      viewBox="0 0 21 20"
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2.2}
        d="M10.5 1v18M19.5 10h-18"
      />
    </Svg>
  )
}

export default BuyIcon
