import styled from 'styled-components'

interface InfoCardDescriptionProps {
  color: 'purple' | 'yellow-dark'
}

export const CartContainer = styled.div`
  max-width: 71rem;
  margin: 2.5rem auto;

  display: grid;
  grid-template-columns: 1fr 28rem;
  row-gap: 0.94rem;
  column-gap: 2rem;
`

export const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme.colors['base-card']};
`

export const CartCardInfo = styled(CartCard)`
  border-radius: 6px;
`

export const CartCardResume = styled(CartCard)`
  border-radius: 6px 44px;
`

export const InfoCardDescription = styled.div<InfoCardDescriptionProps>`
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

export const PaymentSelectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

export const PaymentSelection = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 1px solid transparent;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  position: relative;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};

  transition:
    background-color 0.1s,
    border-color 0.1s;

  svg {
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
  }

  &:has(input[type='radio']:checked) {
    border: 1px solid ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors['purple-light']};
  }
`
