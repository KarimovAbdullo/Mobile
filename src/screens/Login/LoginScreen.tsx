import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import Button from 'components/common/Button'
import Container from 'components/common/Container'
import CustomText from 'components/common/CustomText'
import SelectWalletModal from 'components/common/SelectWalletModal'
import { Loading } from 'components/indicator'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import R from 'res'
import { getDriverResults, getDrivers } from 'state/user/actions'
import { getUserSelector } from 'state/user/selectors'
import { IDriver, RaceResult } from 'types/data'

import stylesConfig from './LoginScreen.styles'

const LoginScreen = () => {
  const styles = useStyles(stylesConfig)
  const dispatch = useAppDispatch()
  const colors = useColors()
  const { getDriversLoading, drivers, offset } = useAppSelector(getUserSelector)
  const navigation = useSmartNavigation()
  const ref = useRef<BottomSheetModalMethods>(null)
  const [selectedResults, setSelectedResults] = useState<RaceResult[]>([])
  const [modalKey, setModalKey] = useState(0)
  const [loadingDriverId, setLoadingDriverId] = useState<string | null>(null)

  const onPressResults = (driverId: string) => {
    setLoadingDriverId(driverId)
    dispatch(
      getDriverResults({
        driverId,
        onSuccess: data => {
          setSelectedResults(data)
          setModalKey(prev => prev + 1)
          setTimeout(() => {
            ref.current?.present()
          }, 50)
          setLoadingDriverId(null)
        },
        onError: () => {
          Alert.alert('Error', 'Could not fetch results')
          setLoadingDriverId(null)
        },
      }),
    )
  }

  const onPressItem = (item: string) => {
    navigation.navigate(R.routes.SCREEN_DETAIL, { item })
  }

  useEffect(() => {
    fetchDrivers(offset)
  }, [offset])

  //@ts-ignore
  const fetchDrivers = (pageOffset: number) => {
    ref.current?.present()
    dispatch(
      getDrivers({
        offset: pageOffset,
        onSuccess: () => {},
        onError: e => {
          Alert.alert(
            'Error',
            typeof e === 'string' ? e : 'Something went wrong',
          )
        },
      }),
    )
  }

  const handleNext = () => {
    if (offset + 10 < 861) {
      dispatch({ type: 'user/setOffset', payload: offset + 10 })
    }
  }

  const handlePrev = () => {
    if (offset >= 10) {
      dispatch({ type: 'user/setOffset', payload: offset - 10 })
    }
  }

  if (getDriversLoading) {
    return <Loading />
  }

  const renderItem = ({ item }: { item: IDriver }) => (
    <View style={styles.itemCart}>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => onPressItem(item.driverId)}>
          <CustomText style={styles.name}>
            {item.givenName} {item.familyName}
          </CustomText>
        </TouchableOpacity>

        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <TouchableOpacity onPress={() => onPressResults(item.driverId)}>
            {loadingDriverId === item.driverId ? (
              <Loading color={colors.white} />
            ) : (
              <CustomText color="white" size={12}>
                races
              </CustomText>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.constainer}
        showsVerticalScrollIndicator={false}>
        <Container hideVertical>
          <FlatList
            data={drivers}
            keyExtractor={item => item.driverId}
            renderItem={renderItem}
          />
          <View style={styles.cart}>
            <Button
              text="Prev"
              style={styles.btn}
              onPress={handlePrev}
              disabled={offset === 0}
            />
            <Button style={styles.btn} text="Next" onPress={handleNext} />
          </View>
        </Container>
      </ScrollView>
      <SelectWalletModal
        key={modalKey}
        innerRef={ref}
        snapPoints={['80']}
        data={selectedResults}
      />
    </SafeAreaView>
  )
}

export default LoginScreen
