// modules
import styled from 'styled-components'

type Props = { type: string; disabled: boolean; grow: boolean }
export const STextField = styled.input<Props>`
  width: ${({ grow, type }) =>
    !grow ? (type === 'text' ? '9rem' : '6rem') : '100%'};
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  box-shadow: none;
  border-radius: -0%;
  border-color: ${({ theme }) => theme.palette.secondary.main};
  border-style: none none solid none;
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
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`
