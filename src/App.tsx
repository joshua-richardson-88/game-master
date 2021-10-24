// react
import React from 'react'

// modules
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// project files
import { HomePage } from 'pages'
import { ProtectedRoute } from 'components'
import Theme from 'styles/ThemeProvider'

export default function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <ProtectedRoute exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </Theme>
  )
}
