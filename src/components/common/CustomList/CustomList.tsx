import { useStyles } from 'hooks/useStyles'
import React from 'react'

import stylesConfig from './CustomList.styles'

interface IProps<ItemT> {
  data: ReadonlyArray<ItemT>
  renderItem: (item: ItemT, index: number) => React.ReactNode
  ItemSeparatorComponent?: React.ComponentType<any> | null
  ListHeaderComponent?: React.ReactNode
  showHeaderAlways?: boolean
}

export const CustomList = <ItemT,>(props: IProps<ItemT>) => {
  const {
    data,
    renderItem,
    ItemSeparatorComponent,
    ListHeaderComponent,
    showHeaderAlways = false,
  } = props
  useStyles(stylesConfig)

  const renderSeparator = (index: number) => {
    if (ItemSeparatorComponent && index !== data.length - 1) {
      return <ItemSeparatorComponent />
    }
    return null
  }

  return (
    <React.Fragment>
      {showHeaderAlways
        ? ListHeaderComponent
        : data.length > 0
          ? ListHeaderComponent
          : null}

      {data.map((item, index) => (
        <React.Fragment key={index.toString()}>
          {renderItem(item, index)}
          {renderSeparator(index)}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}
