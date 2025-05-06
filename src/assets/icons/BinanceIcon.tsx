import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const BinanceIcon = (props: IProps) => {
  const { color = '#F1B90A', size = 32 } = props

  return (
    <Svg width={s(size)} height={s(size)} fill="none" viewBox="0 0 32 32">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm-5.956-17.564 5.94-5.94 5.94 5.94-2.244 2.244-3.696-3.696-3.696 3.696-2.244-2.244Zm-1.32 1.32L6.48 16l2.244 2.244L10.968 16l-2.244-2.244Zm7.128 0L13.608 16l2.244 2.244L18.096 16l-2.244-2.244ZM20.999 16l2.244-2.244L25.487 16l-2.244 2.244L21 16Zm-4.883 9.635 2.244-2.243 3.695-3.696-2.244-2.244-3.695 3.696-3.696-3.696-2.244 2.244 3.696 3.695 2.244 2.244Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default BinanceIcon
