// modules
import styled from 'styled-components'

type Props = { height: string; disabled: boolean; grow: boolean }
export const STextFieldArea = styled.textarea<Props>`
  height: ${({ height }) => height};
  width: 100%;
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  resize: none;
  box-shadow: none;
  border-radius: -0%;
  border-color: ${({ theme }) => theme.palette.secondary.main};
  border-style: none none solid none;
  overflow: hidden;
  padding: 5px;
  background-color: hsla(0, 0%, 0%, 0.02);
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.secondary.main : theme.palette.common.black};
  transition: all 0.5s;

  &::placeholder {
    color: transparent;
  }

  &::focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`
