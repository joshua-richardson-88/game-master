// modules
import styled from 'styled-components'

export const STextLabel = styled.label`
  width: fit-content;
  display: block;
  opacity: 1;
  font-size: 1em;
  color: hsl(0, 0%, 67%);
  transform: translateY(-1.25em);
  transform-origin: 0 0;
  transition: all 0.3s;
  user-select: none;

  &:hover {
    cursor: text;
  }
`
