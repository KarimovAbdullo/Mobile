import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const SendIcon = (props: IProps) => {
  const { color = '#fff', size = 24 } = props
  return (
    <Svg
      width={s(size)}
      height={s((25 / 24) * size)}
      fill="none"
      viewBox="0 0 25 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M21.207 12.707a1 1 0 0 1-1.414 0L12.5 5.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M12.5 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default SendIcon
