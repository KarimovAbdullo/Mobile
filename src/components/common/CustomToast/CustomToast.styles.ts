import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  toastContainer: {
    borderRadius: '16@s',
    backgroundColor: colors.black + 'D9',
    paddingHorizontal: '16@s',
    marginHorizontal: '8@s',
    paddingVertical: '16@vs',
    width: '90%',
  },
  bodyLabel: {
    marginTop: '4@vs',
  },
}))
