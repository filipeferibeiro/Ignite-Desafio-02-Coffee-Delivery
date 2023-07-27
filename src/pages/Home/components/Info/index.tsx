import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import MainImage from '../../../../assets/main-image.svg'

import {
  InfoContainer,
  InfoContainerBackground,
  InfoContainerContent,
  InfoSubTitle,
  InfoTextContainer,
  InfoTitle,
  TopicsContainer,
  TopicsItem,
} from './styles'

export function Info() {
  return (
    <InfoContainerBackground>
      <InfoContainerContent>
        <InfoContainer>
          <InfoTextContainer>
            <InfoTitle>
              Encontre o café perfeito para qualquer hora do dia
            </InfoTitle>
            <InfoSubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </InfoSubTitle>
            <TopicsContainer>
              <TopicsItem variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
                Compra simples e segura
              </TopicsItem>
              <TopicsItem variant="base-text">
                <Package size={16} weight="fill" />
                Embalagem mantém o café intacto
              </TopicsItem>
              <TopicsItem variant="yellow">
                <Timer size={16} weight="fill" />
                Entrega rápida e rastreada
              </TopicsItem>
              <TopicsItem variant="purple">
                <Coffee size={16} weight="fill" />O café chega fresquinho até
                você
              </TopicsItem>
            </TopicsContainer>
          </InfoTextContainer>
          <img
            src={MainImage}
            alt="Um copo de café com grãos espalhados ao redor"
          />
        </InfoContainer>
      </InfoContainerContent>
    </InfoContainerBackground>
  )
}
