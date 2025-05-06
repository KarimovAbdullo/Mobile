import Clipboard from '@react-native-clipboard/clipboard'
import CustomTouchable from 'components/common/CustomTouchable'
import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { DocumentPickerResponse } from 'react-native-document-picker'
import R from 'res'

import Columns from '../Columns'
import CustomText from '../CustomText'
import stylesConfig from './FileUploadInput.styles'

export interface IFileUploadInputProps {
  WalletAddressValue?: string
  rightIcon?: ReactNode
  typeUploadFile: boolean
  docData?: DocumentPickerResponse | null
  onPressUploadFile?: () => void
  clearPickerData?: () => void
  secondary?: boolean
}

const FileUploadInput = ({
  typeUploadFile = false,
  WalletAddressValue = '',
  clearPickerData,
  onPressUploadFile,
  docData,
  secondary = false,
}: IFileUploadInputProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  const onCopyWalletAddress = () => {
    Clipboard.setString(WalletAddressValue)
  }

  return (
    <CustomTouchable
      onPress={onPressUploadFile}
      style={[
        styles.container,
        { backgroundColor: secondary ? colors.grayBackground : colors.white },
      ]}>
      {typeUploadFile ? (
        <>
          {docData ? (
            <Columns align="center" justify="space-between" fullWidth>
              <Columns columnContainer>
                <CustomText size={12} color="graySecondaryText" medium>
                  {'PDF'}
                </CustomText>
                <CustomText size={16} color="blue">
                  {docData.name}
                </CustomText>
              </Columns>

              <CustomTouchable onPress={clearPickerData}>
                <R.icons.CloseIcon color={colors.blue} />
              </CustomTouchable>
            </Columns>
          ) : (
            <Columns align="center" justify="space-between" fullWidth>
              <CustomText size={secondary ? 16 : 12} medium={!secondary}>
                {'Upload supporting documents'}
              </CustomText>
              <R.icons.ReceiveIcon color={colors.blue} />
            </Columns>
          )}
        </>
      ) : (
        <Columns align="center" justify="space-between" fullWidth>
          <Columns columnContainer>
            <CustomText size={12} color="graySecondaryText" medium>
              {'Wallet Address'}
            </CustomText>
            <CustomText size={16}>{WalletAddressValue}</CustomText>
          </Columns>

          <CustomTouchable onPress={onCopyWalletAddress}>
            <R.icons.ClipboardIcon />
          </CustomTouchable>
        </Columns>
      )}
    </CustomTouchable>
  )
}

export default FileUploadInput
