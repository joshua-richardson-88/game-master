// modules
import styled from 'styled-components'

type Props = { direction: 'up' | 'down' }
export const SDropdownListContainer = styled.div<Props>`
  position: absolute;
  top: ${({ direction }) => direction === 'down' && '2rem'};
  bottom: ${({ direction }) => direction === 'up' && '2rem'};
  width: 100%;
  z-index: 100;
`
