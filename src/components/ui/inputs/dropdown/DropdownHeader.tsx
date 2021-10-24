// modules
import styled from 'styled-components'

type Props = { disabled: boolean }
export const SDropdownHeader = styled.div<Props>`
  padding: 0.4rem 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.secondary.main : theme.palette.primary.light};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
