import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Space } from '../Space'

interface IProps {
  bottomSpace?: number
}

export const BottomSpace = (props: IProps) => {
  const { bottomSpace } = props
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <Space
      height={
        safeAreaInsets.bottom > 20 ? safeAreaInsets.bottom : bottomSpace || 20
      }
    />
  )
}
