import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const SellIcon = (props: IProps) => {
  const { color = '#fff', size = 32 } = props
  return (
    <Svg
      width={s(size)}
      height={s((33 / 32) * size)}
      fill="none"
      viewBox="0 0 33 32"
      {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M22.87 9.641c.178.18.287.428.287.7v11.315a1 1 0 0 1-2 0v-8.9l-9.607 9.607a1 1 0 0 1-1.414-1.415l9.607-9.606h-8.9a1 1 0 0 1 0-2h11.314a.997.997 0 0 1 .707.293"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default SellIcon
