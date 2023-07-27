import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import {
  CartButton,
  CartButtonCounter,
  HeaderActionItemsContainer,
  HeaderContainer,
  PlaceLocationIndicator,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />
      <HeaderActionItemsContainer>
        <PlaceLocationIndicator>
          <MapPin size={22} weight="fill" />
          Campina Grande, PB
        </PlaceLocationIndicator>
        <CartButton to="/cart">
          <ShoppingCart size={22} weight="fill" />
          <CartButtonCounter>0</CartButtonCounter>
        </CartButton>
      </HeaderActionItemsContainer>
    </HeaderContainer>
  )
}
