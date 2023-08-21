import {
  OrderInfoBackground,
  OrderInfoContainer,
  SuccessContainer,
  SuccessLeftContainer,
  SucessSubTitle,
  SucessTitle,
  TopicsItem,
} from './styles'

import Delivery from '../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessLeftContainer>
        <SucessTitle>Uhu! Pedido confirmado</SucessTitle>
        <SucessSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SucessSubTitle>
        <OrderInfoBackground>
          <OrderInfoContainer>
            <TopicsItem variant="purple">
              <MapPin size={16} weight="fill" />
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </TopicsItem>
            <TopicsItem variant="yellow">
              <Timer size={16} weight="fill" />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </TopicsItem>
            <TopicsItem variant="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </TopicsItem>
          </OrderInfoContainer>
        </OrderInfoBackground>
      </SuccessLeftContainer>
      <img src={Delivery} alt="Homem levando uma caixa em uma moto roxa" />
    </SuccessContainer>
  )
}
