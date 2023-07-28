import styled from 'styled-components'

export const AmountSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['base-button']};
`

export const AmountSelectorButton = styled.button`
  color: ${(props) => props.theme.colors.purple};
  border: 0;
  background: transparent;
  width: 0.875rem;
  height: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`

export const AmountSelectorValue = styled.span`
  color: ${(props) => props.theme.colors['base-title']};
`
