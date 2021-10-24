import styled from 'styled-components'

type Props = {
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'even'
  items?: 'start' | 'end' | 'center'
  margin?: boolean
}
export const SMenuItemContainer = styled.div<Props>`
  width: 100%;
  height: 2rem;
  overflow: hidden;
  display: ${({ justify, items }) => (justify || items ? 'flex' : 'block')};
  justify-content: ${({ justify }) => {
    switch (justify) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      case 'between':
        return 'space-between'
      case 'around':
        return 'space-around'
      case 'even':
        return 'space-evenly'
      default:
        return 'flex-start'
    }
  }};
  align-items: ${({ justify }) => {
    switch (justify) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      default:
        return 'flex-start'
    }
  }};
  margin-bottom: ${({ margin }) => (margin ? '1rem' : '0')};
`
