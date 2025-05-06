import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import BottomSheet from 'components/common/BottomSheet'
import Columns from 'components/common/Columns'
import CustomText from 'components/common/CustomText'
import { Space } from 'components/common/Space'
import { useStyles } from 'hooks/useStyles'
import React, { RefObject } from 'react'
import { View } from 'react-native'
import R from 'res'
import { RaceResult } from 'types/data'

import CustomTouchable from '../CustomTouchable'
import stylesConfig from './SelectWalletModal.styles'

interface IProps {
  innerRef?: RefObject<BottomSheetModalMethods>
  onItemPress?: (item: any) => void
  snapPoints?: string[]
  data: RaceResult[]
}

export const SelectWalletModal = (props: IProps) => {
  const { innerRef, snapPoints = ['80%'], data } = props
  useStyles(stylesConfig)

  const flattenedResults = data.flatMap(race =>
    race.Results.map(result => ({
      ...result,
      raceName: race.raceName,
      season: race.season,
      round: race.round,
      date: race.date,
      circuitName: race.Circuit.circuitName,
    })),
  )

  return (
    <BottomSheet
      onDismiss={innerRef?.current?.dismiss() || undefined}
      ref={innerRef}
      snapPoints={snapPoints || ['80%']}
      maxDynamicContentSize={R.consts.SCREEN_HEIGHT * 0.92}>
      <View>
        <Columns align="center" justify="center">
          <BottomSheetFlatList
            data={flattenedResults}
            keyExtractor={(item, index) =>
              `${item.number || index}-${item.raceName}`
            }
            renderItem={({ item }) => (
              <CustomTouchable>
                <View>
                  <CustomText bold size={16}>
                    {item.raceName} ({item.season})
                  </CustomText>
                  <CustomText>
                    Position: {item.position} | Driver: {item.Driver.givenName}{' '}
                    {item.Driver.familyName}
                  </CustomText>
                  <CustomText>
                    Constructor: {item.Constructor.name} | Time:{' '}
                    {item.Time?.time || 'N/A'}
                  </CustomText>
                </View>
                <Space height={24} />
              </CustomTouchable>
            )}
          />
          <Space width={24} />
        </Columns>

        <Space height={24} />
      </View>
    </BottomSheet>
  )
}
