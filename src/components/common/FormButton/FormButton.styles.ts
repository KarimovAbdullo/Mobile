import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    // width: '100%',
    height: '54@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@s',
    backgroundColor: '#293B85',
  },
  transparent: {
    borderWidth: '1@s',
    borderColor: 'black',
    backgroundColor: colors.white,
  },
  disabled: {
    backgroundColor: 'gray',
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledSecond: {
    opacity: '0.3@s',
  },
  text: {
    color: colors.white,
    fontSize: '24@s',
  },
  disableWhite: {
    backgroundColor: colors.background,
  },
}))
