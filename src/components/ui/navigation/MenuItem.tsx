// modules
import styled from 'styled-components'

type Props = { open?: boolean }
export const SMenuItem = styled.div<Props>`
  display: flex;
  height: 3rem;
  justify-content: ${({ open }) => (open ? 'space-between' : 'center')};
  align-items: flex-start;
  margin-bottom: 0.5rem;
`

type Props2 = { isOpen: boolean; isSelected: boolean }
export const SMenuItemInnerCurve = styled.div<Props2>`
  height: 2rem;
  width: 284px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({ isOpen, isSelected, theme }) =>
    isOpen && isSelected && theme.palette.common.white};
  cursor: ${({ isOpen }) => (isOpen ? 'pointer' : 'default')};

  &::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ isOpen, isSelected, theme }) =>
      isOpen && isSelected && `12px 12px ${theme.palette.common.white}`};
  }
  &::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ isOpen, isSelected, theme }) =>
      isOpen && isSelected && `12px -12px ${theme.palette.common.white}`};
  }

  &:hover::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ isOpen, isSelected }) =>
      isOpen && !isSelected && `12px 12px hsl(205, 12%, 90%)`};
  }
  &:hover {
    background-color: ${({ isOpen, isSelected }) =>
      isOpen && !isSelected && 'hsl(205, 12%, 90%)'};
  }
  &:hover::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ isOpen, isSelected }) =>
      isOpen && !isSelected && `12px -12px hsl(205, 12%, 90%)`};
  }
`
