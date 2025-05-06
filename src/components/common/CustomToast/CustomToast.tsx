import CustomText from 'components/common/CustomText'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'

import stylesConfig from './CustomToast.styles'

type IProps = {
  title?: string
  body?: string
}

const CustomToast: React.FC<IProps> = ({ title, body }) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.toastContainer}>
      {title ? (
        <CustomText size={30} color="white">
          {title}
        </CustomText>
      ) : null}
      {body ? (
        <CustomText
          size={14}
          style={title ? styles.bodyLabel : null}
          color="white">
          {body}
        </CustomText>
      ) : null}
    </View>
  )
}

export default CustomToast
