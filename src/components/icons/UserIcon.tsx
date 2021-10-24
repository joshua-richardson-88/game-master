//react
import React from 'react'

interface Props {
  style: {
    height: string
    color: string
    fill: string
  }
}
export default function UserIcon({ style: { height, color, fill } }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ height, color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      fill={fill}
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
        clipRule='evenodd'
      />
    </svg>
  )
}
