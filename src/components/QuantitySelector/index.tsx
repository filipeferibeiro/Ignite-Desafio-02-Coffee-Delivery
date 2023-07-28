import { Minus, Plus } from 'phosphor-react'
import {
  AmountSelectorButton,
  AmountSelectorContainer,
  AmountSelectorValue,
} from './styles'

interface QuantitySelectorProps {
  quantity: number
  changeQuantity: (delta: number) => void
}

export function QuantitySelector({
  quantity,
  changeQuantity,
}: QuantitySelectorProps) {
  function addOneQuantity() {
    changeQuantity(1)
  }

  function removeOneQuantity() {
    changeQuantity(-1)
  }

  return (
    <AmountSelectorContainer>
      <AmountSelectorButton onClick={removeOneQuantity}>
        <Minus size={14} weight="bold" />
      </AmountSelectorButton>
      <AmountSelectorValue>{quantity}</AmountSelectorValue>
      <AmountSelectorButton onClick={addOneQuantity}>
        <Plus size={14} weight="bold" />
      </AmountSelectorButton>
    </AmountSelectorContainer>
  )
}
