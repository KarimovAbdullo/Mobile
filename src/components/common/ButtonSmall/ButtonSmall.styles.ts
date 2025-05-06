import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  disabled: {
    backgroundColor: colors.blue + 30,
    shadowOpacity: 0,
    elevation: 0,
  },
  flex: {
    flex: 1,
  },
  button: {
    width: '105@s',
    height: '48@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@s',
    backgroundColor: colors.blue,
  },
}))
