import React from 'react'
import { s } from 'react-native-size-matters/extend'
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg'

interface IProps {
  size?: number
}

const SolanaIcon = (props: IProps) => {
  const { size = 32 } = props

  return (
    <Svg width={s(size)} height={s(size)} fill="none" viewBox="0 0 32 32">
      <G clipPath="url(#a)">
        <Path
          fill="url(#b)"
          d="M6.548 21.792a.915.915 0 0 1 .648-.269h22.346c.409 0 .613.494.324.784l-4.414 4.425a.915.915 0 0 1-.648.268H2.458a.459.459 0 0 1-.324-.783l4.414-4.425Z"
        />
        <Path
          fill="url(#c)"
          d="M6.548 5.268A.94.94 0 0 1 7.196 5h22.346c.409 0 .613.494.324.783l-4.414 4.426a.915.915 0 0 1-.648.268H2.458a.459.459 0 0 1-.324-.783l4.414-4.426Z"
        />
        <Path
          fill="url(#d)"
          d="M25.452 13.477a.915.915 0 0 0-.648-.268H2.458a.459.459 0 0 0-.324.783l4.414 4.426c.17.17.401.268.648.268h22.346a.459.459 0 0 0 .324-.783l-4.414-4.426Z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={27.408}
          x2={11.881}
          y1={2.357}
          y2={32.022}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={20.645}
          x2={5.119}
          y1={-1.183}
          y2={28.482}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={24.005}
          x2={8.479}
          y1={0.576}
          y2={30.241}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M2 5h28v22H2z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SolanaIcon
