// modules
import styled from 'styled-components'

type Props = { isSelected: boolean }
export const STabThumb = styled.div<Props>`
  position: relative;
  height: 2.5rem;
  min-width: 7.5rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  user-select: none;
  cursor: ${({ isSelected }) => !isSelected && 'pointer'};
  color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.palette.text.primary}` : `hsla(0, 0%, 0%, 0.2)`};

  &:hover {
    color: ${({ isSelected, theme }) =>
      !isSelected && `${theme.palette.text.primary}`};
  }

  &::after {
    content: '';
    position: absolute;
    right: -4px;
    bottom: -0rem;
    left: -4px;
    height: 2px;
    background-color: ${({ theme, isSelected }) =>
      isSelected && `${theme.palette.primary.main}`};
    box-shadow: ${({ isSelected }) =>
      isSelected && `0 4px 4px hsla(0, 0%, 0%, 0.6)`};
  }
  &:hover::after {
    background-color: ${({ theme, isSelected }) =>
      !isSelected && `${theme.palette.primary.light}`};
    box-shadow: ${({ isSelected }) =>
      !isSelected && `0 4px 4px hsla(0, 0%, 0%, 0.6)`};
  }
`
