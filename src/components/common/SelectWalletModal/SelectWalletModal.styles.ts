import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  item: {
    backgroundColor: colors.grayBackground,
    borderRadius: '8@s',
    paddingHorizontal: '16@s',
    paddingVertical: '12@s',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price_content: {
    alignItems: 'flex-end',
  },
}))
