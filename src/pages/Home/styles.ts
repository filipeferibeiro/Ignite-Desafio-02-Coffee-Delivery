import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 71rem;
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  gap: 3.38rem;
`

export const HomeTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;

  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(16rem, 1fr));
  gap: 2rem;
`
