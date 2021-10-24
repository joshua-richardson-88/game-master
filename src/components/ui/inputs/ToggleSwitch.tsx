// modules
import styled from 'styled-components'

export const SToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin: 4px;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;
    background: hsl(0, 0%, 100%);
    box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.6);
    transition-property: left;
    transition-duration: ${(props) =>
      `${props.theme.transitions.duration.shorter}ms`};
    transition-timing-function: ${(props) =>
      props.theme.transitions.easing.easeInOut};
  }
  &::after {
    content: '';
    height: 19px;
    width: 42px;
    display: inline-block;
    background: hsla(0, 1%, 77%, 0.55);
    border-radius: 18px;
    clear: both;
  }

  &:checked::before {
    left: 19px;
    box-shadow: -1px 1px 3px hsla(0, 0%, 0%, 0.6);
  }
  &:checked::after {
    background: hsl(122, 45%, 47%);
  }
`
