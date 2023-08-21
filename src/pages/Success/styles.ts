import styled from 'styled-components'

interface TopicsItemProps {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const SuccessContainer = styled.div`
  max-width: 71rem;
  margin: 5rem auto;

  display: grid;
  grid-template-columns: 1fr 30.75rem;
  align-items: center;
  justify-content: center;
  column-gap: 6.38rem;

  @media (max-width: 1136px) {
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
  }
`

export const SuccessLeftContainer = styled.div``

export const SucessTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors['yellow-dark']};
`
export const SucessSubTitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const OrderInfoBackground = styled.div`
  padding: 2px;
  border-radius: 6px 36px;
  background: linear-gradient(135deg, #dbac2c, #8047f8);
  margin-top: 2.5rem;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 6px 36px;
`

export const TopicsItem = styled.span<TopicsItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme.colors['base-text']};

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 64px;

    background: ${(props) => props.theme.colors[props.variant]};
    color: ${(props) => props.theme.colors.background};
  }
`
