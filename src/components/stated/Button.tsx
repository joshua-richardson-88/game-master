// react
import React, { ReactNode } from 'react'

// modules

// project files
import { SButton } from 'ui_components'

interface Props {
  color?: ColorOptions
  size?: Size
  variant?: Variant
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

type ColorOptions =
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | string
type Size = 'small' | 'medium' | 'large'
type Variant = 'contained' | 'outlined' | 'blank'

export default function Button({
  onClick,
  variant = 'blank',
  size = 'medium',
  color = 'primary',
  children,
  disabled = false,
}: Props) {
  return (
    <SButton
      onClick={onClick}
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
    >
      {children}
    </SButton>
  )
}
