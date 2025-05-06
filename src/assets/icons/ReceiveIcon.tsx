import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const ReceiveIcon = (props: IProps) => {
  const { color = '#fff', size = 25 } = props
  return (
    <Svg
      width={s(size)}
      height={s((25 / 24) * size)}
      fill="none"
      {...props}
      viewBox="0 0 25 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M12.49 21a.997.997 0 0 1-.697-.293l-8-8a1 1 0 1 1 1.414-1.414l6.293 6.293V4a1 1 0 1 1 2 0v13.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-8 8a.997.997 0 0 1-.698.293H12.5"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default ReceiveIcon
