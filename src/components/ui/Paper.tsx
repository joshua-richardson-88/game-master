// modules
import styled from 'styled-components'

type Props = {
  flex?: string | undefined
  padding?: 'none' | 'narrow' | 'wide'
  hasShadow?: boolean
}
export const SPaper = styled.div<Props>`
  padding: ${({ padding }) => {
    if (padding) {
      if (padding === 'none') return '0'
      if (padding === 'narrow') return '0.25rem'
      if (padding === 'wide') return '2rem'
    }
    return '1rem'
  }};
  display: flex;
  flex-flow: column nowrap;
  flex: ${({ flex }) => flex && `${flex}`};
  box-shadow: ${({ hasShadow }) =>
    (hasShadow || hasShadow === undefined) && '0 1px 5px 0 rgba(0, 0, 0, 0.3)'};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 4px;
`
