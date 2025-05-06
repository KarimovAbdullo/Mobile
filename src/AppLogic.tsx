import React, { ReactChild, ReactElement, ReactNode, useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'

interface IAppLogic {
  children: ReactNode | ReactChild | ReactElement
}

const AppLogic = (props: IAppLogic) => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true })
    }, 500)
  }, [])

  return <>{props.children}</>
}

export default AppLogic
