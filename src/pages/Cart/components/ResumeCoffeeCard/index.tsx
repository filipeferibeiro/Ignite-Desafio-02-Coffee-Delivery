import {
  CardActionsContent,
  CardDescriptionContent,
  CardLeftContent,
  CardValueContent,
  RemoveButton,
  ResumeCoffeeCardContainer,
} from './styles'

import { QuantitySelector } from '../../../../components/QuantitySelector'
import { useState } from 'react'
import { Trash } from 'phosphor-react'
import { Coffee } from '../../../../model/CoffeeDataModel'

interface ResumeCoffeeProps {
  coffee: Coffee
  quantityValue: number
}

export function ResumeCoffeeCard({ coffee, quantityValue }: ResumeCoffeeProps) {
  const [quantity, setQuantity] = useState(quantityValue)

  function handleChangeQuantity(delta: number) {
    setQuantity((state) => {
      const newQuantity = state + delta

      if (newQuantity < 1 || newQuantity > 10) {
        return state
      }

      return newQuantity
    })
  }

  return (
    <ResumeCoffeeCardContainer>
      <CardLeftContent>
        <img src={coffee.imageURL} alt="" />
        <CardDescriptionContent>
          <p>{coffee.name}</p>
          <CardActionsContent>
            <QuantitySelector
              quantity={quantity}
              changeQuantity={handleChangeQuantity}
            />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </CardActionsContent>
        </CardDescriptionContent>
      </CardLeftContent>
      <CardValueContent>R$ 9,90</CardValueContent>
    </ResumeCoffeeCardContainer>
  )
}
