import { createStyles } from 'utils/createStyles'

export default createStyles((_colors, fonts) => ({
  16: {
    fontSize: '16@ms',
    lineHeight: '20@ms',
  },
  14: {
    fontSize: '14@ms',
    lineHeight: '22@ms',
  },
  13: {
    fontSize: '13@ms',
    lineHeight: '22@ms',
  },
  30: {
    fontSize: '30@ms',
    lineHeight: '40@ms',
  },
  12: {
    fontSize: '12@ms',
    lineHeight: '20@ms',
  },
  11: {
    fontSize: '11@ms',
    lineHeight: '20@ms',
  },
  24: {
    fontSize: '24@ms',
    lineHeight: '25@ms',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  flex: { flex: 1 },
  underline: { textDecorationLine: 'underline' },
  lineThrough: { textDecorationLine: 'line-through' },
  heightOff: {
    textAlignVertical: 'center',
    lineHeight: undefined,
    includeFontPadding: false,
  },
  17: {
    fontSize: '17@ms',
    lineHeight: undefined,
  },

  regular: {
    fontFamily: fonts.GTFEkstraTRIAL.regular,
  },
  regularItalic: {
    fontFamily: fonts.GTFEkstraTRIAL.regularItalic,
  },
  bold: {
    fontFamily: fonts.GTFEkstraTRIAL.bold,
  },
  boldItalic: {
    fontFamily: fonts.GTFEkstraTRIAL.boldItalic,
  },
  semiBold: {
    fontFamily: fonts.GTFEkstraTRIAL.semiBold,
  },
  semiBoldItalic: {
    fontFamily: fonts.GTFEkstraTRIAL.semiBoldItalic,
  },
  medium: {
    fontFamily: fonts.GTFEkstraTRIAL.medium,
  },
  mediumItalic: {
    fontFamily: fonts.GTFEkstraTRIAL.mediumItalic,
  },
}))
