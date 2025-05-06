import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path, Rect } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const ArrowMoreIcon = (props: IProps) => {
  const { color = '#304497', size = 40 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 40 40" fill="none">
      <Rect width={s(size)} height={s(size)} rx="8" fill="#F5F6F9" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3705 13.6412C26.5476 13.8217 26.6569 14.069 26.6569 14.3418L26.6569 25.6555C26.6569 26.2078 26.2091 26.6555 25.6569 26.6555C25.1046 26.6555 24.6569 26.2078 24.6569 25.6555L24.6569 16.756L15.0503 26.3626C14.6597 26.7531 14.0266 26.7531 13.636 26.3626C13.2455 25.9721 13.2455 25.3389 13.636 24.9484L23.2426 15.3418L14.3431 15.3418C13.7909 15.3418 13.3431 14.8941 13.3431 14.3418C13.3431 13.7895 13.7909 13.3418 14.3431 13.3418L25.6569 13.3418C25.9297 13.3418 26.177 13.451 26.3574 13.6282C26.3596 13.6303 26.3618 13.6325 26.364 13.6347"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowMoreIcon
