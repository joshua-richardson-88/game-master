// modules
import styled from 'styled-components'

type Props = { canSelect: boolean; isSelected?: boolean }
export const SDropdownItem = styled.div<Props>`
  flex: 1;
  padding: 0.3rem;
  cursor: ${({ canSelect }) => (canSelect ? 'pointer' : 'not-allowed')};
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.palette.primary.light
      : theme.palette.primary.contrastText};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`
