// modules
import styled from 'styled-components'

export const SHomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 7%);
  z-index: 10;
`
interface PageProps {
  mainOpen: boolean
  altOpen: boolean
}
export const SBody = styled.div<PageProps>`
  height: 100%;
  width: ${({ mainOpen, altOpen }) => {
    const margins = ['600px', '378px', '308px', '86px']
    let width = ''

    if (mainOpen && altOpen) width = margins[0]
    if (mainOpen && !altOpen) width = margins[2]
    if (!mainOpen && altOpen) width = margins[1]
    if (!mainOpen && !altOpen) width = margins[3]

    return `calc(100% - ${width})`
  }};
  z-index: 60;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.palette.common.white};
  margin-left: ${({ mainOpen, altOpen }) => {
    const margins = ['600px', '378px', '308px', '86px']

    if (mainOpen && altOpen) return margins[0]
    if (mainOpen && !altOpen) return margins[2]
    if (!mainOpen && altOpen) return margins[1]
    if (!mainOpen && !altOpen) return margins[3]
  }};
  transition-property: all;
  transition-duration: ${(props) =>
    `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) =>
    props.theme.transitions.easing.easeInOut};
`
export const SContent = styled.div`
  padding: 1rem;
`
