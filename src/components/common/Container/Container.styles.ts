import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  container: {
    flex: 1,
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
  },
  clean: {
    paddingVertical: 0,
    flex: 0,
    margin: 0,
  },
  hideVertical: {
    paddingVertical: 0,
  },
  hideHorizontal: {
    paddingHorizontal: 0,
  },
  flexOff: {
    flex: 0,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
}))
