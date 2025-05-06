import React, { useEffect } from 'react'

interface Props {
  duration: number
  onFinish: () => void
}

const Timer: React.FC<Props> = ({ duration, onFinish }) => {
  const [timeLeft, setTimeLeft] = React.useState(duration)

  useEffect(() => {
    const since = Date.now()
    const interval = setInterval(() => {
      const now = Date.now()
      const delta = now - since
      const newTimeLeft = timeLeft - delta
      if (newTimeLeft <= 0) {
        clearInterval(interval)
      }
      setTimeLeft(newTimeLeft)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      return
    }
    onFinish()
  }, [timeLeft, onFinish])

  const formatted =
    Math.floor(timeLeft / 60000)
      .toString()
      .padStart(2, '0') +
    ':' +
    Math.ceil(timeLeft / 1000)
      .toString()
      .padStart(2, '0')

  return <>{formatted}</>
}

export default Timer
