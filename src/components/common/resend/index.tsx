import React, { useCallback } from 'react'

import CustomText from '../CustomText'
import CustomTouchable from '../CustomTouchable'
import Timer from '../timer'

interface Props {
  submitText: string
  cooldownText: string
  cooldownDuration: number
  onPress: () => Promise<boolean>
}

const Resend: React.FC<Props> = ({
  submitText,
  cooldownText,
  cooldownDuration,
  onPress: onPressCallback,
}) => {
  const [isCooldown, setIsCooldown] = React.useState(true)

  const onPress = useCallback(() => {
    onPressCallback()
      .then(sent => {
        setIsCooldown(sent)
      })
      .catch(e => {
        console.error(e)
        setIsCooldown(false)
      })
  }, [onPressCallback])

  if (isCooldown) {
    return (
      <CustomText color="graySecondaryText">
        {cooldownText}{' '}
        <Timer
          duration={cooldownDuration}
          onFinish={() => setIsCooldown(false)}
        />
      </CustomText>
    )
  }

  return (
    <CustomTouchable onPress={onPress}>
      <CustomText color="textPrimary">{submitText}</CustomText>
    </CustomTouchable>
  )
}

export default Resend
