import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    width: '100%',
    height: '54@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@s',
    backgroundColor: colors.blue,
  },
  disabled: {
    backgroundColor: colors.blue + 30,
    shadowOpacity: 0,
    elevation: 0,
  },
  flex: {
    flex: 1,
  },
  secondary: {
    backgroundColor: colors.white,
  },
}))
