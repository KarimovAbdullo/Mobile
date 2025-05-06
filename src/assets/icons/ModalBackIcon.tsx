import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path, Rect } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
  strokeWidth?: string
}

const ModalBackIcon = (props: IProps) => {
  const { color = '#fff', size = 48 } = props

  return (
    <Svg
      width={s(size)}
      height={s((48 / 48) * size)}
      fill="none"
      viewBox="0 0 48 48">
      <Rect width={47} height={47} x={0.5} y={0.5} stroke={color} rx={23.5} />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.829 18 11 23.829l5.829 5.828"
      />
      <Path stroke={color} strokeLinecap="round" d="M11 23.828h25.5" />
    </Svg>
  )
}

export default ModalBackIcon
