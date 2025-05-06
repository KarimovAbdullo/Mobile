import { IS_ANDROID } from 'res/consts.ts'
import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.grayBackground,
    borderRadius: '8@s',
    paddingHorizontal: '16@s',
    height: '64@vs',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    left: IS_ANDROID ? '20@s' : '16@ms',
    color: colors.graySecondaryText,
  },
  input: {
    fontSize: '16@ms',
    paddingTop: IS_ANDROID ? '26@vs' : '14@vs',
    color: '#000',
    lineHeight: '20@ms',
  },
}))
