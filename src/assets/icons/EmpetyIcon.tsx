import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
  size?: number
}

const EmpentyIcon = (props: IProps) => {
  const { color = '#293B85', size = 120 } = props
  return (
    <Svg
      width={s(size)}
      height={s((120 / 120) * size)}
      fill="none"
      viewBox="0 0 120 120">
      <Path
        fill={color}
        fillOpacity={0.3}
        fillRule="evenodd"
        d="M28.812 22.096c1.23-6.64 7.051-11.668 14.047-11.668H71.43c.758 0 1.485.3 2.02.837l28.572 28.571c.536.536.837 1.263.837 2.02v40c0 6.996-5.028 12.817-11.668 14.047-1.23 6.639-7.05 11.668-14.047 11.668H31.43c-7.89 0-14.285-6.396-14.285-14.286V36.142c0-6.996 5.028-12.817 11.667-14.046Zm-.239 5.962a8.575 8.575 0 0 0-5.714 8.084v57.143a8.571 8.571 0 0 0 8.571 8.571h45.714a8.575 8.575 0 0 0 8.084-5.714h-42.37c-7.889 0-14.285-6.396-14.285-14.286V28.058Zm60 62.37H42.86a8.571 8.571 0 0 1-8.572-8.572V24.713a8.571 8.571 0 0 1 8.572-8.571h27.388L97.144 43.04v38.816a8.571 8.571 0 0 1-8.57 8.572ZM65.716 33.285a2.857 2.857 0 0 1 2.857 2.857v20H82.86a2.857 2.857 0 1 1 0 5.714H65.716A2.857 2.857 0 0 1 62.859 59V36.142a2.857 2.857 0 0 1 2.857-2.857Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default EmpentyIcon
