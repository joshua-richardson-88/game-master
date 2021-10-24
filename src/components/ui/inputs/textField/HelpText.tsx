// modules
import styled from 'styled-components'

type Props = { show: boolean }
export const SHelpText = styled.div<Props>`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.error.main};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  margin-top: -12px;
`
