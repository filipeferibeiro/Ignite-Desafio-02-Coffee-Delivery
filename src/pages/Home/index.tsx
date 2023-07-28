import { CoffeeCard } from '../../components/CoffeeCard'
import { Info } from './components/Info'

import { coffeesDataList } from '../../model/CoffeeDataModel'

import { CoffeesList, HomeContainer, HomeTitle } from './styles'

export function Home() {
  return (
    <>
      <Info />
      <HomeContainer>
        <HomeTitle>Nossos cafés</HomeTitle>
        <CoffeesList>
          {coffeesDataList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesList>
      </HomeContainer>
    </>
  )
}
