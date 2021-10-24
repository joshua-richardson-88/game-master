// modules
import styled from 'styled-components'

type LabelProps = { isSelected: boolean }
export const SRadioItem = styled.div<LabelProps>`
  border-radius: 1rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.primary.light : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.common.white : theme.palette.common.black};
  padding: 0.3rem 1rem;
  user-select: none;
  cursor: pointer;
`
