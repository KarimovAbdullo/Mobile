import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters/extend'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const DodgeIcon = (props: IProps) => {
  const { color = '#D7C79D', size = 32 } = props

  return (
    <Svg width={s(size)} height={s(size)} fill="none" viewBox="0 0 32 32">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm.663-7H11v-6H9v-2h2V9h5.605c1.492 0 2.793.288 3.902.864a6.231 6.231 0 0 1 2.578 2.443c.61 1.046.915 2.28.915 3.702 0 1.416-.302 2.647-.905 3.693a6.214 6.214 0 0 1-2.55 2.434c-1.096.576-2.39.864-3.882.864Zm-1.615-3.232h1.42c1.181 0 2.05-.307 2.608-.921.558-.62.837-1.566.837-2.838 0-1.284-.288-2.233-.866-2.847-.577-.62-1.476-.93-2.695-.93h-1.304V15H17v2h-1.952v2.768Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default DodgeIcon
