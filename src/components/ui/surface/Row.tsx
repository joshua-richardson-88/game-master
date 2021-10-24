// modules
import styled from 'styled-components'

type Props = {
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  align?: 'start' | 'end' | 'center' | 'stretch'
  gap?: string
  padding?: string
}

export const SRow = styled.div<Props>`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => wrap && wrap};
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
  gap: ${({ gap }) => gap && gap};
  padding: ${({ padding }) => padding && padding};
`
