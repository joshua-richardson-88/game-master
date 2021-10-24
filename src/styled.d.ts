// modules
import 'styled-components'

interface ObjectKeys {
  [key: string]: any
}

interface Palette {
  light?: string
  main: string
  dark?: string
  contrastText: string
}
interface Fonts {
  title: string
  main: string
}
interface FontType {
  fontFamily?: string
  fontWeight: number
  fontSize: string
  lineHeight: number
  letterSpacing: string
}
interface TransformedFont extends FontType {
  textTransform: string
}
interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    breakpoints: Breakpoints
    palette: {
      background: {
        paper: string
        default: string
      }
      common: {
        black: string
        white: string
      }
      divider: string
      error: Palette
      info: Palette
      primary: Palette
      secondary: Palette
      success: Palette
      text: {
        primary: string
        secondary: string
        disabled: string
        hint: string
      }
      type: string
      warning: Palette
    }
    typography: {
      htmlFontSize: number
      fontFamily: string
      fontSize: number
      fontWeight: {
        light: number
        regular: number
        medium: number
        bold: number
      }
      h1: FontType
      h2: FontType
      h3: FontType
      h4: FontType
      h5: FontType
      h6: FontType
      subtitle: FontType
      body1: FontType
      body2: FontType
      button: TransformedFont
      caption: FontType
      overline: TransformedFont
    }
    transitions: {
      easing: {
        easeInOut: string
        easeOut: string
        easeIn: string
        sharp: string
      }
      duration: {
        shortest: number
        shorter: number
        short: number
        standard: number
        complex: number
        enteringScreen: number
        leavingScreen: number
      }
    }
    zIndex: {
      appBar: number
      drawer: number
      modal: number
      snackbar: number
      tooltip: number
    }
  }
}
