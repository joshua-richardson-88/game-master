// modules
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: ${(props) => `${props.theme.typography.htmlFontSize}px`};
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => `${props.theme.typography.fontSize}px`};
    background: ${(props) => props.theme.palette.background.default};
    color: ${(props) =>
      props.theme.palette.type === 'light'
        ? props.theme.palette.secondary.contrastText
        : props.theme.palette.primary.contrastText};
    cursor: default;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.typography.fontFamily};
  }
  h1 {
    font-weight: ${(props) => props.theme.typography.h1.fontWeight};
    font-size: ${(props) => props.theme.typography.h1.fontSize};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h1.letterSpacing};
  }
  h2 {
    font-weight: ${(props) => props.theme.typography.h2.fontWeight};
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h2.letterSpacing};
  }
  h3 {
    font-weight: ${(props) => props.theme.typography.h3.fontWeight};
    font-size: ${(props) => props.theme.typography.h3.fontSize};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h3.letterSpacing};
  }
  h4 {
    font-weight: ${(props) => props.theme.typography.h4.fontWeight};
    font-size: ${(props) => props.theme.typography.h4.fontSize};
    line-height: ${(props) => props.theme.typography.h4.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.letterSpacing};
  }
  h5 {
    font-weight: ${(props) => props.theme.typography.h5.fontWeight};
    font-size: ${(props) => props.theme.typography.h5.fontSize};
    line-height: ${(props) => props.theme.typography.h5.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h5.letterSpacing};
  }
  h6 {
    font-weight: ${(props) => props.theme.typography.h6.fontWeight};
    font-size: ${(props) => props.theme.typography.h6.fontSize};
    line-height: ${(props) => props.theme.typography.h6.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h6.letterSpacing};
  }
  button {
    font-weight: ${(props) => props.theme.typography.button.fontWeight};
    font-size: ${(props) => props.theme.typography.button.fontSize};
    line-height: ${(props) => props.theme.typography.button.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.button.letterSpacing};
    text-transform: ${(props) => props.theme.typography.button.textTransform};
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`

export default GlobalStyles
