import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const ArrowDownIcon = (props: IProps) => {
  const { color = '#304497', size = 24 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9908 21C11.7379 20.9976 11.4858 20.9 11.2929 20.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L11 17.5858L11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4L13 17.5858L19.2929 11.2929C19.6834 10.9024 20.3166 10.9024 20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L12.7071 20.7071C12.5142 20.9 12.2621 20.9976 12.0092 21C12.0062 21 12.0031 21 12 21"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowDownIcon
