import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../model/CoffeeDataModel'
import { QuantitySelector } from '../QuantitySelector'

import {
  CardTag,
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardTagsContainer,
  CoffeeCardTextsContainer,
  CoffeeCardName,
  CoffeeCardMoneyValue,
  CoffeeCardBuyContainer,
  CoffeeCardBuyActions,
  CoffeeCardCartButton,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addNewCoffeeOnCart } = useContext(CoffeeCartContext)

  function handleAddNewCoffeeOnCart() {
    addNewCoffeeOnCart(coffee, quantity)
    setQuantity(0)
  }

  function handleChangeQuantity(delta: number) {
    setQuantity((state) => {
      const newQuantity = state + delta

      if (newQuantity < 0 || newQuantity > 10) {
        return state
      }

      return newQuantity
    })
  }

  const isCartButtonDisabled = !quantity

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageURL} alt="" />
      <CoffeeCardTagsContainer>
        {coffee.tags.map((tag) => (
          <CardTag key={tag}>{tag}</CardTag>
        ))}
      </CoffeeCardTagsContainer>
      <CoffeeCardTextsContainer>
        <CoffeeCardName>{coffee.name}</CoffeeCardName>
        <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>
      </CoffeeCardTextsContainer>
      <CoffeeCardBuyContainer>
        <CoffeeCardMoneyValue>
          <span>R$</span> 9,90
        </CoffeeCardMoneyValue>
        <CoffeeCardBuyActions>
          <QuantitySelector
            quantity={quantity}
            changeQuantity={handleChangeQuantity}
          />
          <CoffeeCardCartButton
            onClick={handleAddNewCoffeeOnCart}
            disabled={isCartButtonDisabled}
          >
            <ShoppingCart size={22} weight="fill" />
          </CoffeeCardCartButton>
        </CoffeeCardBuyActions>
      </CoffeeCardBuyContainer>
    </CoffeeCardContainer>
  )
}
