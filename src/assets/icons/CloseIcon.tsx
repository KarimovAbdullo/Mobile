import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const CloseIcon = (props: IProps) => {
  const { color = '#1B1726', size = 24 } = props

  return (
    <Svg
      width={s(size)}
      height={s(size)}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M17.293 18.707a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.415L12 13.413l5.293 5.293Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default CloseIcon
