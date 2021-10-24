//react
import React from 'react'

interface Props {
  style: {
    height: string
    color: string
    fill: string
  }
}
export default function CloseIcon({ style: { height, color, fill } }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ height, color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      fill={fill}
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
    </svg>
  )
}
