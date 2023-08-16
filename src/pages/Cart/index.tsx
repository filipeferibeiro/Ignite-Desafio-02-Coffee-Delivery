import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressForm,
  CartCardInfo,
  CartCardResume,
  CartContainer,
  CartInfoContainer,
  CartSection,
  CoffeeCardDivider,
  PaymentSelection,
  PaymentSelectionContainer,
  ResumeTextValue,
  ResumeTotalValue,
  ResumeValues,
  SectionTitle,
  SubmitButton,
} from './styles'
import { InfoCardDescription } from './components/InfoCardDescription'
import { ResumeCoffeeCard } from './components/ResumeCoffeeCard'

export function Cart() {
  return (
    <CartContainer>
      <CartSection>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <CartInfoContainer>
          <CartCardInfo>
            <InfoCardDescription
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              Icon={MapPinLine}
              color="yellow-dark"
            />
            <AddressForm>
              <input id="zip-code" type="text" placeholder="CEP" />
              <input id="street" type="text" placeholder="Rua" />
              <input id="number" type="text" placeholder="Número" />
              <input id="complement" type="text" placeholder="Complemento" />
              <input id="neighborhood" type="text" placeholder="Bairro" />
              <input id="city" type="text" placeholder="Cidade" />
              <input id="state" type="text" placeholder="UF" />
            </AddressForm>
          </CartCardInfo>
          <CartCardInfo>
            <InfoCardDescription
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              Icon={CurrencyDollar}
              color="purple"
            />
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
      </CartSection>
      <CartSection>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <CartCardResume>
          <ResumeCoffeeCard />
          <CoffeeCardDivider />
          <ResumeCoffeeCard />
          <CoffeeCardDivider />
          <ResumeCoffeeCard />
          <CoffeeCardDivider />
          <ResumeValues>
            <ResumeTextValue>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </ResumeTextValue>
            <ResumeTextValue>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </ResumeTextValue>
            <ResumeTotalValue>
              <span>Total</span>
              <span>R$ 33,20</span>
            </ResumeTotalValue>
          </ResumeValues>
          <SubmitButton>confirmar pedido</SubmitButton>
        </CartCardResume>
      </CartSection>
    </CartContainer>
  )
}
