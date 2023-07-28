import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  & img {
    margin-top: -2.5rem;
  }
`

export const CoffeeCardTagsContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;
`

export const CardTag = styled.span`
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};

  border-radius: 16px;
  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const CoffeeCardTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2.06rem;
`

export const CoffeeCardName = styled.h2`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CoffeeCardDescription = styled.h3`
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;
  text-align: center;

  color: ${(props) => props.theme.colors['base-label']};
`

export const CoffeeCardBuyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
`

export const CoffeeCardMoneyValue = styled.span`
  flex: 1;
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.colors['base-text']};

  & span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const CoffeeCardBuyActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeCardCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['base-card']};

  transition: background-color 0.2s;

  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.purple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
