import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  constainer: {
    backgroundColor: colors.white,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  btn: {
    width: '50@s',
  },
  itemCart: {
    paddingVertical: '5@vs',
    paddingHorizontal: '10@s',
    borderWidth: 1,
    borderRadius: '20@s',
    marginBottom: '5@vs',
    paddingRight: '20@s',
  },
  info: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: '50@s',
    height: '30@vs',
  },
  name: {
    paddingRight: '90@s',
  },
}))
