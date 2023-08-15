import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CartCardInfo,
  CartCardResume,
  CartContainer,
  CartInfoContainer,
  InfoCardDescription,
  InfoCardDescriptionTexts,
  PaymentSelection,
  PaymentSelectionContainer,
  SectionTitle,
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <SectionTitle>Complete seu pedido</SectionTitle>
      <SectionTitle>Cafés selecionados</SectionTitle>
      <CartInfoContainer>
        <CartCardInfo>
          <InfoCardDescription color="yellow-dark">
            <MapPinLine weight="regular" size={22} />
            <InfoCardDescriptionTexts>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </InfoCardDescriptionTexts>
          </InfoCardDescription>
        </CartCardInfo>
        <CartCardInfo>
          <InfoCardDescription color="purple">
            <CurrencyDollar weight="regular" size={22} />
            <InfoCardDescriptionTexts>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </InfoCardDescriptionTexts>
          </InfoCardDescription>
          <PaymentSelectionContainer>
            <PaymentSelection htmlFor="credit">
              <input id="credit" type="radio" name="payment" />
              <CreditCard weight="regular" size={16} />
              <p>Cartão de Crédito</p>
            </PaymentSelection>
            <PaymentSelection htmlFor="debit">
              <input id="debit" type="radio" name="payment" />
              <Bank weight="regular" size={16} />
              <p>Cartão de Débito</p>
            </PaymentSelection>
            <PaymentSelection htmlFor="cash">
              <input id="cash" type="radio" name="payment" />
              <Money weight="regular" size={16} />
              <p>Dinheiro</p>
            </PaymentSelection>
          </PaymentSelectionContainer>
        </CartCardInfo>
      </CartInfoContainer>
      <CartCardResume>resumo</CartCardResume>
    </CartContainer>
  )
}
