import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const EthIcon = (props: IProps) => {
  const { size = 32, color } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 32 32" fill="none">
      <Path
        d="M15.9974 1L15.8008 1.68367V21.5203L15.9974 21.7211L24.9946 16.2783L15.9974 1Z"
        fill={color ? color : '#343434'}
      />
      <Path d="M15.9974 1L7 16.2783L15.9974 21.7211V12.093V1Z" fill="#8C8C8C" />
      <Path
        d="M15.9976 23.4654L15.8867 23.6037V30.6698L15.9976 31.001L25.0002 18.0254L15.9976 23.4654Z"
        fill={color ? color : '#3C3C3B'}
      />
      <Path
        d="M15.9974 31.001V23.4654L7 18.0254L15.9974 31.001Z"
        fill={color ? color : '#8C8C8C'}
      />
      <Path
        d="M15.9961 21.7219L24.9932 16.2791L15.9961 12.0938V21.7219Z"
        fill={color ? color : '#141414'}
      />
      <Path d="M7 16.2791L15.9974 21.7219V12.0938L7 16.2791Z" fill="#393939" />
    </Svg>
  )
}

export default EthIcon
