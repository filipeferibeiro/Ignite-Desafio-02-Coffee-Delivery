import styled from 'styled-components'

interface InfoCardDescriptionContainerProps {
  color: 'purple' | 'yellow-dark'
}

export const InfoCardDescriptionContainer = styled.div<InfoCardDescriptionContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors[props.color]};
  }
`

export const InfoCardDescriptionTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p + p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};
  }
`
