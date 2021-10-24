// modules
import styled from 'styled-components'

// project files
import { Props } from './types'

export const SHeading3 = styled.h3<Props>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? `${wrap}` : 'nowrap')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: ${({ align }) => (align ? `${align}` : 'flex-start')};
  visibility: ${({ visibility }) => (visibility ? '1' : '0')};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
  color: ${({ color, theme }) => {
    switch (color) {
      case 'error':
        return theme.palette.error.main
      case 'info':
        return theme.palette.info.main
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'success':
        return theme.palette.success.main
      case 'warning':
        return theme.palette.warning.main
      default:
        return theme.palette.common.black
    }
  }};
`
