import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 71rem;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
`

export const HeaderActionItemsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PlaceLocationIndicator = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: 0.875rem;

  & svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const CartButton = styled(NavLink)`
  position: relative;
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};

  text-decoration: none;

  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors['yellow-light']};
  }
`

export const CartButtonCounter = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.175rem;

  font-size: 0.75rem;

  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors.white};

  border-radius: 40px;
`
