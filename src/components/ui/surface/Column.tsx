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
  maxHeight?: string
}

export const SColumn = styled.div<Props>`
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  display: flex;
  flex-direction: column;
  flex-wrap: ${({ wrap }) => wrap && `${wrap}`};
  justify-content: ${({ justify }) => justify && `${justify}`};
  align-items: ${({ align }) => align && `${align}`};
  gap: ${({ gap }) => gap && `${gap}`};
  overflow: ${({ maxHeight }) => (maxHeight ? 'auto' : 'none')};
`
