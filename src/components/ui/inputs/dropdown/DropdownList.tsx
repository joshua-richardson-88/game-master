// modules
import styled from 'styled-components'

export const SDropdownList = styled.div`
  max-height: 13rem;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  font-weight: 500;
`
