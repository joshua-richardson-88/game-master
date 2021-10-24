import styled from 'styled-components'

type Props = { open: boolean }
export const SLogo = styled.img<Props>`
  height: ${({ open }) => (open ? '3rem' : '3rem')};
  margin-right: ${({ open }) => (open ? '1rem' : '0')};
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.palette.secondary.main}`};
`
