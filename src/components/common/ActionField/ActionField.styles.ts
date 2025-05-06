import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.grayBackground,
    borderRadius: '8@s',
    paddingHorizontal: '16@s',
    paddingVertical: '12@s',
    height: '64@vs',
  },
  flex: {
    flex: 1,
  },
}))
