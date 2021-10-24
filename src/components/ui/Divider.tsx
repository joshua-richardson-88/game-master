import styled from 'styled-components'

type Props = {
  hideShadow?: boolean
  margin?: string
  color?: 'primary' | 'secondary'
  direction?: 'vertical' | 'horizontal'
}
export const SDivider = styled.div<Props>`
  height: 2px;
  width: ${({ direction }) =>
    !direction || direction === 'horizontal' ? '100%' : '2rem'};
  border-bottom: ${({ direction, color, theme }) =>
    color
      ? `2px solid ${theme.palette[color].main}`
      : '2px solid hsl(0, 0%, 7%)'};
  box-shadow: ${({ hideShadow }) =>
    hideShadow ? '' : '0 4px 7px 1px hsl(0, 0%, 7%);'};
  margin: ${({ margin }) => (margin ? `${margin}` : '1rem 0')};
  transform: ${({ direction }) =>
    !direction || direction === 'horizontal'
      ? 'rotate(0deg)'
      : 'rotate(90deg)'};
`
