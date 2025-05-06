import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  strokeWidth?: number
}

const CopyIcon = (props: IProps) => {
  const { color = '#304497', strokeWidth = 2, size = 16 } = props

  return (
    <Svg
      width={s(size)}
      height={s(size)}
      fill="none"
      viewBox={'0 0 16 16'}
      {...props}>
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        clipPath="url(#a)">
        <Path d="M13.333 6h-6C6.597 6 6 6.597 6 7.333v6c0 .737.597 1.334 1.333 1.334h6c.737 0 1.334-.597 1.334-1.334v-6c0-.736-.597-1.333-1.334-1.333Z" />
        <Path d="M3.334 10h-.667a1.333 1.333 0 0 1-1.333-1.333v-6a1.333 1.333 0 0 1 1.333-1.333h6a1.333 1.333 0 0 1 1.334 1.333v.667" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CopyIcon
