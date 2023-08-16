import {
  CardActionsContent,
  CardDescriptionContent,
  CardLeftContent,
  CardValueContent,
  RemoveButton,
  ResumeCoffeeCardContainer,
} from './styles'

import CoffeeImg from '../../../../assets/coffees/arabe.png'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { useState } from 'react'
import { Trash } from 'phosphor-react'

export function ResumeCoffeeCard() {
  const [quantity, setQuantity] = useState(0)

  function handleChangeQuantity(delta: number) {
    setQuantity((state) => {
      const newQuantity = state + delta

      if (newQuantity < 0 || newQuantity > 10) {
        return state
      }

      return newQuantity
    })
  }

  return (
    <ResumeCoffeeCardContainer>
      <CardLeftContent>
        <img src={CoffeeImg} alt="" />
        <CardDescriptionContent>
          <p>Expresso Tradicional</p>
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
