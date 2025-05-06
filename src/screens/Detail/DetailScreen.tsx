import UserIcon from 'assets/icons/UserIcon'
import Container from 'components/common/Container'
import CustomText from 'components/common/CustomText'
import { useAppSelector } from 'hooks/redux'
import { useColors } from 'hooks/useColors'
// import useSmartNavigation from 'hooks/useSmartNavigation.ts'
import useSmartRoute from 'hooks/useSmartRoute.ts'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Linking, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import R from 'res'
import { getUserSelector } from 'state/user/selectors'

// import { showToast } from 'utils/toast.ts'
import stylesConfig from './DetailScreenStyles'

const DetailScreen = () => {
  const route = useSmartRoute<typeof R.routes.SCREEN_DETAIL>()
  const { item } = route.params
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  // const dispatch = useAppDispatch()
  const { drivers } = useAppSelector(getUserSelector)

  const getFlagByNationality = (nationality: string): string => {
    switch (nationality.toLowerCase()) {
      case 'british':
        return '🇬🇧'
      case 'belgian':
        return '🇧🇪'
      case 'american':
        return '🇺🇸'
      case 'german':
        return '🇩🇪'
      case 'dutch':
        return '🇳🇱'
      case 'italian':
        return '🇮🇹'
      case 'thai':
        return '🇹🇭'
      case 'spanish':
        return '🇪🇸'
      default:
        return '🏳️'
    }
  }

  const driverItem = drivers.find(i => i.driverId === item)
  return (
    <Container>
      <View style={styles.main}>
        <View style={styles.sections}>
          <View style={styles.imageCart}>
            <UserIcon size={70} color={colors.border} />
          </View>
          <View>
            <View style={styles.infoTitles}>
              <CustomText size={12}>name:</CustomText>
              <CustomText bold>{driverItem?.givenName}</CustomText>
            </View>

            <View style={styles.infoTitles}>
              <CustomText size={12}>last name:</CustomText>
              <CustomText bold> {driverItem?.familyName}</CustomText>
            </View>

            <View style={styles.infoTitles}>
              <CustomText size={12}>{'date of birth:  '}</CustomText>
              <CustomText right bold>
                {driverItem?.dateOfBirth}
              </CustomText>
            </View>

            <View style={styles.infoTitles}>
              <CustomText size={12}>{'nationality:  '}</CustomText>
              <CustomText right bold>
                {getFlagByNationality(driverItem?.nationality || '')}{' '}
                {driverItem?.nationality}
              </CustomText>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(driverItem?.url || '')}
          activeOpacity={0.8}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}>
            <CustomText color="white">More Information</CustomText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default DetailScreen
