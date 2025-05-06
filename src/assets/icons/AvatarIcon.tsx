import React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters/extend'
import Svg, { Path, Rect } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  width?: number
  height?: number
}

const AvatarIcon = (props: IProps) => {
  const { color = 'white', width = 20, height = 26 } = props

  return (
    <Svg width={s(width)} height={vs(height)} viewBox="0 0 20 26" fill={color}>
      <Rect x="5" y="0.5" width="10" height="11" rx="5" fill={color} />
      <Path
        d="M1.30225 19.791C2.30003 15.7999 5.88605 13 10 13C14.1139 13 17.7 15.7999 18.6978 19.791L18.886 20.5438C18.961 20.8438 18.9651 21.1572 18.898 21.459L18.174 24.7169C18.0723 25.1745 17.6665 25.5 17.1978 25.5H2.80217C2.33347 25.5 1.92766 25.1745 1.82598 24.7169L1.102 21.459C1.03492 21.1572 1.03905 20.8438 1.11404 20.5438L1.30225 19.791Z"
        fill={color}
      />
    </Svg>
  )
}

export default AvatarIcon
