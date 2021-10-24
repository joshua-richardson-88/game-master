// modules
import styled from 'styled-components'

type Props = { height?: string }
export const STextContainer = styled.div<Props>`
  height: ${({ height }) => (height ? height : '30px')};
  margin-top: 0.8rem;
  transition: all 0.3s;
  flex-grow: 1;

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    transform: translateY(-2.8em) scale(0.8);
  }

  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label {
    transform: ${({ height }) =>
      height
        ? `translateY(calc(-2em - ${height})) scale(0.8)`
        : 'translateY(-2.8em) scale(0.8)'};
  }
`
