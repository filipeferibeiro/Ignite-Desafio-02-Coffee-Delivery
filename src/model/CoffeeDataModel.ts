import Americano from '../assets/coffees/americano.png'
import Arabe from '../assets/coffees/arabe.png'
import CafeComLeite from '../assets/coffees/cafe_com_leite.png'
import CafeGelado from '../assets/coffees/cafe_gelado.png'
import Capuccino from '../assets/coffees/capuccino.png'
import ChocolateQuente from '../assets/coffees/chocolate_quente.png'
import Cubano from '../assets/coffees/cubano.png'
import ExpressoCremoso from '../assets/coffees/expresso_cremoso.png'
import Expresso from '../assets/coffees/expresso.png'
import Havaiano from '../assets/coffees/havaiano.png'
import Irlandes from '../assets/coffees/irlandes.png'
import Latte from '../assets/coffees/latte.png'
import Mocchiato from '../assets/coffees/macchiato.png'
import Mochaccino from '../assets/coffees/mochaccino.png'

import { v4 as uuid } from 'uuid'

export interface Coffee {
  id: string
  imageURL: string
  name: string
  description: string
  tags: string[]
  price: number
}

export const coffeesDataList: Coffee[] = [
  {
    id: uuid(),
    imageURL: Americano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: CafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'com leite'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: CafeGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'gelado'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'com leite'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: ChocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: ExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Expresso,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'com leite'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Mocchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'com leite'],
    price: 990,
  },
  {
    id: uuid(),
    imageURL: Mochaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'com leite'],
    price: 990,
  },
]
