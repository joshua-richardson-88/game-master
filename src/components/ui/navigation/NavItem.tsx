// modules
import styled from 'styled-components'

type Props = { isOpen: boolean; isSelected: boolean }
export const SNavItem = styled.div<Props>`
  height: 2rem;
  width: ${({ isOpen }) => (isOpen ? '300px' : '78px')};
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-bottom: 1rem;
  padding-left: ${({ isOpen }) => (isOpen ? '2rem' : '1.4rem')};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.secondary.main : 'inherit'};
  box-shadow: ${({ isSelected }) =>
    isSelected && '0 0 5px hsl(0, 0%, 10%) inset'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.primary.main : theme.palette.secondary.main};

  &::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -26.5px;
    /* background-color: red; */
    right: ${({ isOpen }) => (isOpen ? '0.97rem' : '6px')};
    border-radius: 50%;
    z-index: 30;
    box-shadow: ${({ isSelected, theme }) =>
      isSelected && `8px 8px ${theme.palette.secondary.main}`};
  }
  &::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.6rem;
    right: ${({ isOpen }) => (isOpen ? '0.97rem' : '6px')};
    border-radius: 50%;
    z-index: 30;
    box-shadow: ${({ isSelected, theme }) =>
      isSelected && `8px -8px ${theme.palette.secondary.main}`};
  }

  &:hover::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.6rem;
    right: ${({ isOpen }) => (isOpen ? '0.97rem' : '6px')};
    border-radius: 50%;
    z-index: 20;
    box-shadow: ${({ isSelected, theme }) =>
      isSelected
        ? `8px 8px ${theme.palette.secondary.main}`
        : '8px 8px hsl(0, 0%, 7%)'};
  }
  &:hover {
    background-color: ${({ isSelected }) => !isSelected && 'hsl(0, 0%, 7%)'};
    cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};
  }
  &:hover::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.6rem;
    right: ${({ isOpen }) => (isOpen ? '0.97rem' : '6px')};
    border-radius: 50%;
    z-index: 20;
    box-shadow: ${({ isSelected, theme }) =>
      isSelected
        ? `8px -8px ${theme.palette.secondary.main}`
        : '8px -8px hsl(0, 0%, 7%)'};
  }
  &:hover > span {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
`
