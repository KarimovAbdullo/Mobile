import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  constainer: {
    backgroundColor: colors.grayBackground,
    flex: 1,
  },
  imageCart: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    padding: '20@s',
    borderRadius: '10@s',
    marginRight: '10@s',
  },
  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  sections: {
    flexDirection: 'row',
  },
  infoTitles: {
    flexDirection: 'row',
    // width: 120,
    justifyContent: 'space-between',
    marginBottom: '20@vs',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
}))
