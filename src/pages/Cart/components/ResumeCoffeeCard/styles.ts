import styled from 'styled-components'

export const ResumeCoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
`

export const CardLeftContent = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const CardDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CardActionsContent = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const RemoveButton = styled.button`
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};
  border: none;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};

  cursor: pointer;

  transition: background-color 0.1s;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const CardValueContent = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors['base-text']};
`
