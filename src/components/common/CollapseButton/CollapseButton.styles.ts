import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.grayBackground,
    borderRadius: '8@s',
    paddingHorizontal: '16@s',
    paddingVertical: '20@s',
  },
  flex: {
    flex: 1,
  },
}))
