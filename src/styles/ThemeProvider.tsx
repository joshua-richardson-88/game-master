// react
import { ReactNode } from 'react'

// modules
import { ThemeProvider } from 'styled-components'

// project files
import theme from './theme'
import GlobalStyles from './globals'

interface Props {
  children: ReactNode
}

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
