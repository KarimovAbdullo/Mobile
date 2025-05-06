import TransformAnimated from 'components/animations/TransformAnimated'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import stylesConfig from './CardTailAnimated.styles'

interface IProps {
  children: ReactNode
}

const CardTailAnimated = (props: IProps) => {
  const { children } = props
  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.container}>
      {children}
      <TransformAnimated
        initialX={0}
        initialY={50}
        delay={100}
        style={[styles.center, styles.tailBigPosition]}>
        <View style={[styles.tail, styles.tailBig]} />
      </TransformAnimated>

      <TransformAnimated
        initialX={0}
        initialY={50}
        delay={200}
        style={[styles.center, styles.tailSmallPosition]}>
        <View style={[styles.tail, styles.tailSmall]} />
      </TransformAnimated>
    </View>
  )
}

export default CardTailAnimated
