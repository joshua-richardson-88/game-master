// modules
import styled from 'styled-components'

type Props = {
  show: boolean
  left: number
  vertical: 'top' | 'bottom'
  description: string
}
export const STooltip = styled.div<Props>`
  position: relative;
  margin-left: 1rem;

  &::before,
  &::after {
    --tooltip-color: hsl(0, 0%, 90%);
    --arrow-size: 15px;
    --translate-y: ${({ vertical }) =>
      vertical === 'top'
        ? 'calc(-100% - var(--arrow-size))'
        : 'calc(0% + var(--arrow-size))'};
    --top-position: ${({ vertical }) =>
      vertical === 'top' ? '-0.5rem' : '1.5rem'};
    position: absolute;
    top: var(--top-position);
    left: ${({ left }) => `${left}px`};
  }

  &::before {
    height: max-content;
    width: max-content;
    max-width: 250px;
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 3px 3px 4px hsla(0, 0%, 0%, 0.2);
    background-color: var(--tooltip-color);
    white-space: pre-wrap;
    z-index: 200;
    transform: translateX(-50%) translateY(var(--translate-y));
    // prettier-ignore
    content: "${({ description }) => `${description}`}";
  }
  &::after {
    left: ${({ vertical }) => (vertical === 'top' ? '12px' : '-2px')};
    top: ${({ vertical }) => vertical === 'bottom' && '0.76rem'};
    z-index: 210;
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: ${({ vertical }) =>
      vertical === 'top' && 'var(--tooltip-color)'};
    border-bottom-color: ${({ vertical }) =>
      vertical === 'bottom' && 'var(--tooltip-color)'};
    transform: ${({ vertical }) =>
      vertical === 'top'
        ? 'translateX(-50%) translateY(calc(-1 * var(--arrow-size)))'
        : 'translateX(-50%) translateY(calc(-1 * var(--arrow-size))) rotate(180%)'};
  }
`
