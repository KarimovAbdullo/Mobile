import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    paddingBottom: '16@ms',
    paddingHorizontal: '16@ms',
    backgroundColor: colors.white,
    borderTopRightRadius: '16@ms',
    borderTopLeftRadius: '16@ms',
  },
  handleContent: {
    paddingTop: '16@ms',
    width: '100%',
    paddingBottom: '20@ms',
  },
  handle: {
    width: '48@ms',
    height: '4@ms',
    borderRadius: '8@ms',
    backgroundColor: colors.graySecondaryText,
    alignSelf: 'center',
  },
}))
