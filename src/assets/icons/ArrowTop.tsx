import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const ArrowTop = (props: IProps) => {
  const { color = '#F5F6F9', size = 24 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071L12 5.41421L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C12.5523 3 13 3.44772 13 4L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 4C11 3.44772 11.4477 3 12 3Z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowTop
