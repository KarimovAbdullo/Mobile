import { SCREEN_WIDTH } from 'res/consts'
import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    alignItems: 'center',
  },
  center: {
    backgroundColor: 'red',
    with: SCREEN_WIDTH,
    alignItems: 'center',
  },
  tail: {
    backgroundColor: colors.white,
    position: 'absolute',
    padding: '30@vs',
    borderRadius: '16@s',
  },
  tailBig: {
    width: '90%',
    opacity: 0.5,
  },
  tailBigPosition: {
    alignItems: 'center',
    top: '-45@vs',
    zIndex: -1,
  },
  tailSmallPosition: {
    alignItems: 'center',
    top: '-33@vs',
    zIndex: -1,
  },
  tailSmall: {
    width: '70%',
    opacity: 0.3,
  },
}))
