// modules
import styled from 'styled-components'

type Props = { width?: string; height?: string }
export const SSpacer = styled.div<Props>`
  height: ${({ height }) => (height ? height : '24px')};
  width: ${({ width }) => (width ? width : '100%')};
`
