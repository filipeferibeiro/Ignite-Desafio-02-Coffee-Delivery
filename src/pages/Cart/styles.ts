import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 71rem;
  margin: 2.5rem auto;

  display: grid;
  grid-template-columns: 1fr 28rem;
  column-gap: 2rem;

  @media (max-width: 1136px) {
    grid-template-columns: 1fr;
  }
`

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
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
  gap: 1.5rem;
  background: ${(props) => props.theme.colors['base-card']};
`

export const CartCardInfo = styled(CartCard)`
  border-radius: 6px;
`

export const CartCardResume = styled(CartCard)`
  border-radius: 6px 44px;
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

export const AddressForm = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';

  input {
    padding: 0.75rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  @media (max-width: 1136px) {
    grid-template-areas:
      'zipCode zipCode zipCode'
      'street street street'
      'number number number'
      'complement complement complement'
      'neighborhood neighborhood neighborhood'
      'city city state';
  }

  #zip-code {
    grid-area: zipCode;
  }
  #street {
    grid-area: street;
  }
  #number {
    grid-area: number;
  }
  #complement {
    grid-area: complement;
  }
  #neighborhood {
    grid-area: neighborhood;
  }
  #city {
    grid-area: city;
  }
  #state {
    grid-area: state;
  }
`

export const CoffeeCardDivider = styled.hr`
  border: 1px solid ${(props) => props.theme.colors['base-button']};
`

export const ResumeValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ResumeTextValue = styled.p`
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;

  color: ${(props) => props.theme.colors['base-text']};
`

export const ResumeTotalValue = styled.h2`
  display: flex;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const SubmitButton = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.colors.yellow};

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
