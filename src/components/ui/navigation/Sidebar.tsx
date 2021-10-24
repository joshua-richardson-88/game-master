// modules
import styled from 'styled-components'

type Props = {
  $alt?: boolean | undefined
  mainOpen: boolean
  altOpen?: boolean
}
export const SSideBar = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ $alt, mainOpen }) => {
    if ($alt || mainOpen) return '300px'
    return '78px'
  }};
  z-index: ${({ $alt }) => ($alt ? '80' : '100')};
  overflow: ${({ $alt }) => !$alt && 'hidden'};
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
  padding: ${({ $alt, mainOpen }) => {
    if ($alt || mainOpen) return '1rem'
    return '1rem 0.4rem'
  }};
  background-color: ${({ $alt, theme }) =>
    $alt ? theme.palette.secondary.main : theme.palette.primary.main};
  margin-left: ${({ $alt, mainOpen, altOpen }) => {
    if ($alt) {
      const margins = ['300px', '78px', '8px', '-214px']
      if (mainOpen && altOpen) return margins[0]
      if (mainOpen && !altOpen) return margins[2]
      if (!mainOpen && altOpen) return margins[1]
      if (!mainOpen && !altOpen) return margins[3]
    }
    return
  }};
  box-shadow: ${({ $alt }) => $alt && '4px 0 10px hsla(0, 0%, 0%, 0.4)'};
  transition-property: ${({ $alt }) => ($alt ? 'margin-left' : 'width')};
  transition-duration: ${(props) =>
    `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) =>
    props.theme.transitions.easing.easeInOut};
`
