import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import {
  CartButton,
  CartButtonCounter,
  HeaderActionItemsContainer,
  HeaderContainer,
  PlaceLocationIndicator,
} from './styles'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext'

export function Header() {
  const { cartSize } = useContext(CoffeeCartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>
      <HeaderActionItemsContainer>
        <PlaceLocationIndicator>
          <MapPin size={22} weight="fill" />
          Campina Grande, PB
        </PlaceLocationIndicator>
        <CartButton to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {!!cartSize && <CartButtonCounter>{cartSize}</CartButtonCounter>}
        </CartButton>
      </HeaderActionItemsContainer>
    </HeaderContainer>
  )
}
