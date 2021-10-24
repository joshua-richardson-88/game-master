// react
import React, { FC } from 'react'

// modules

// project files
import { SMenuItem } from 'ui_components'

type Props = {
  children: React.ReactNode
  isOpen?: boolean
}

export const MenuItem: FC<Props> = ({ children, isOpen }) => {
  return <SMenuItem open={isOpen}>{children}</SMenuItem>
}
