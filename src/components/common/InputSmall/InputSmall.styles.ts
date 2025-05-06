import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  label: {
    color: colors.primaryText,
    marginBottom: '4@vs',
  },
  leftIcon: {
    position: 'absolute',
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '30@s',
    height: '100%',
  },
  activeIcon: {
    zIndex: 100,
  },
  input: {
    fontFamily: fonts.GTFEkstraTRIAL.regular,
    fontSize: '14@ms',
    fontWeight: '700',
    width: '100%',
    height: '48@vs',
    paddingHorizontal: '16@s',
    borderRadius: '8@s',
    backgroundColor: colors.grayBackground,
    color: colors.primaryText,

    textAlignVertical: 'center',
    includeFontPadding: false,
    lineHeight: undefined,
  },
  inputLeftIcon: {
    paddingLeft: '40@s',
  },
  inputRightIcon: {
    paddingRight: '40@s',
  },
  rightIcon: {
    right: 0,
    position: 'absolute',
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '30@s',
    height: '100%',
  },
  boldText: {
    fontWeight: '700',
    fontFamily: fonts.GTFEkstraTRIAL.bold,
  },
  regularText: {
    fontWeight: '400',
    fontFamily: fonts.GTFEkstraTRIAL.regular,
  },
}))
