//react
import React from 'react'

interface Props {
  style: {
    height: string
    color: string
    fill: string
  }
}
export default function FilmIcon({ style: { height, color, fill } }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        height,
        color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      fill={fill}
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z'
        clipRule='evenodd'
      />
    </svg>
  )
}
