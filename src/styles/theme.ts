import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '8px',
  breakpoints: {
    xs: 'screen and (min-width: 0px)',
    sm: 'screen and (min-width: 600px)',
    md: 'screen and (min-width: 960px)',
    lg: 'screen and (min-width: 1280px)',
    xl: 'screen and (min-width: 1920px)',
  },
  palette: {
    background: {
      paper: 'hsl(0, 0%, 98%)',
      default: 'hsl(0, 0%, 80%)',
    },
    common: {
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
    },
    divider: 'hsla(0, 0%, 0%, 0.87)',
    error: {
      light: 'hsl(0, 69%, 67%)',
      main: 'hsl(4, 90%, 58%)',
      dark: 'hsl(0, 65%, 51%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    info: {
      light: 'hsl(207, 89%, 68%)',
      main: 'hsl(207, 90%, 54%)',
      dark: 'hsl(210, 79%, 46%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    primary: {
      light: 'hsl(207, 30%, 46%)',
      main: 'hsl(207, 30%, 24%)',
      contrastText: 'hsl(0, 0%, 85%)',
    },
    secondary: {
      main: 'hsl(205, 12%, 80%)',
      contrastText: 'hsl(0, 0%, 7%)',
    },
    success: {
      light: 'hsl(123, 38%, 64%)',
      main: 'hsl(122, 39%, 49%)',
      dark: 'hsl(123, 43%, 39%)',
      contrastText: 'hsl(0, 0%, 0%, 0.87)',
    },
    text: {
      primary: 'hsla(0, 0%, 0%, 0.87)',
      secondary: 'hsla(0, 0%, 0%, 0.54)',
      disabled: 'hsla(0, 0%, 0%, 0.38)',
      hint: 'hsla(0, 0%, 0%, 0.38)',
    },
    type: 'light',
    warning: {
      light: 'hsl(36, 100%, 65%)',
      main: 'hsl(36, 100%, 50%)',
      dark: 'hsl(30, 100%, 48%)',
      contrastText: 'hsla(0, 0%, 0%, 0.87)',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    h1: {
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0.00938',
    },
    body1: {
      fontWeight: 400,
      fontSize: '0.8rem',
      lineHeight: 1,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0.00938em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}

export default theme
