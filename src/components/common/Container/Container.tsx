import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import stylesConfig from './Container.styles'

interface IProps {
  children?: ReactNode
  hideVertical?: boolean
  hideHorizontal?: boolean
  style?: object
  cleanExtraSpace?: boolean
  flexOff?: boolean
  spaceBetween?: boolean
  spaceEvenly?: boolean
}

const Container = (props: IProps) => {
  const {
    style,
    hideVertical = false,
    hideHorizontal = false,
    children,
    cleanExtraSpace = false,
    flexOff = false,
    spaceBetween = false,
    spaceEvenly = false,
  } = props
  const styles = useStyles(stylesConfig)

  return (
    <View
      style={[
        styles.container,
        hideVertical && styles.hideVertical,
        hideHorizontal && styles.hideHorizontal,
        cleanExtraSpace && styles.clean,
        flexOff && styles.flexOff,
        spaceBetween && styles.spaceBetween,
        spaceEvenly && styles.spaceEvenly,
        style,
      ]}>
      {children}
    </View>
  )
}

export default Container
