import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const ClipboardIcon = (props: IProps) => {
  const { color = '#304497', size = 24 } = props
  return (
    <Svg
      width={s(size)}
      height={s((24 / 24) * size)}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M20.125 2C21.16 2 22 2.84 22 3.875v11.25C22 16.16 21.16 17 20.125 17H8.875A1.875 1.875 0 0 1 7 15.125V3.875C7 2.839 7.84 2 8.875 2h11.25ZM8.875 18.25a3.129 3.129 0 0 1-3.125-3.125V7H3.875C2.839 7 2 7.84 2 8.875v11.25C2 21.16 2.84 22 3.875 22h11.25C16.16 22 17 21.16 17 20.125V18.25H8.875Z"
      />
    </Svg>
  )
}

export default ClipboardIcon
