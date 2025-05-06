import { useBottomSheetModal } from '@gorhom/bottom-sheet'
import { useColors } from 'hooks/useColors'
import React, { useMemo } from 'react'
import { Pressable, StyleSheet } from 'react-native'

const BlurredBackground = () => {
  const B = useBottomSheetModal()
  const onPressHandler = () => {
    B.dismiss()
  }
  const colors = useColors()
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        backgroundColor: colors.black,
        opacity: 0.5,
      },
    ],
    [],
  )

  return <Pressable onPress={onPressHandler} style={containerStyle} />
}

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
})

export default BlurredBackground
