import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path, Rect } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const AddIcon = (props: IProps) => {
  const { color = '#304497', size = 40 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 40 40" fill="none">
      <Rect width={s(size)} height={s(size)} rx="8" fill="#F5F6F9" />
      <Path
        d="M20 11V29"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M29 20L11 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default AddIcon
