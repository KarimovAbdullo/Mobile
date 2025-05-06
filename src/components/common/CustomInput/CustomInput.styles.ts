import { createStyles } from 'utils/createStyles'

export default createStyles((colors, fonts) => ({
  input_container: {
    backgroundColor: colors.grayBackground,
    paddingHorizontal: '16@s',
    height: '64@vs',
    borderRadius: '16@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input_content: {
    width: '70%',
    paddingTop: '8@vs',
    justifyContent: 'center',
  },
  leftIcon: {
    justifyContent: 'center',
    paddingRight: 16,
  },
  activeIcon: {
    zIndex: 100,
  },
  label: {
    color: colors.graySecondaryText,
    fontSize: '12@ms',
    fontFamily: fonts.GTFEkstraTRIAL.regular,
  },
  input: {
    fontFamily: fonts.GTFEkstraTRIAL.regular,
    fontSize: '16@ms',
    lineHeight: '20@ms',
    width: '100%',
    color: colors.primaryText,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  inputLeftIcon: {
    paddingLeft: '40@s',
  },
  inputRightIcon: {
    paddingRight: '40@s',
  },
  rightIcon: {
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: '700',
    fontFamily: fonts.GTFEkstraTRIAL.bold,
  },
  regularText: {
    fontWeight: '400',
    fontFamily: fonts.GTFEkstraTRIAL.regular,
  },
  confirm_btn: {
    width: '48@s',
    height: '48@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@s',
  },
  confirm_tex: {
    width: '72@s',
    height: '48@vs',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@s',
  },
  container: {
    backgroundColor: colors.grayBackground,
    borderRadius: '8@s',
    paddingHorizontal: '16@s',
    height: '64@vs',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}))
