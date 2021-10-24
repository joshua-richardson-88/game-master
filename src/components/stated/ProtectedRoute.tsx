// react
import React from 'react'

// modules
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

// project files

interface Props extends React.HTMLAttributes<Element> {
  component: any
  exact: any
  path: string
}

export default function ProtectedRoute({ component, ...args }: Props) {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <div>Loading...</div>,
      })}
      {...args}
    />
  )
}
