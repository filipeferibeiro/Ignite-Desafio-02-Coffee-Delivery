import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../model/CoffeeDataModel'

export interface Address {
  zipCode: number
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  state: string
}

export interface CoffeeOnCart {
  coffeeModel: Coffee
  quantity: number
}

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

interface CoffeeCartContextType {
  cart: CoffeeOnCart[]
  cartSize: number
  address: Address | null
  addNewCoffeeOnCart: (coffeeModel: Coffee, quantity: number) => void
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartContextProvider({
  children,
}: CoffeeCartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeOnCart[]>([])
  const [address, setAddress] = useState<Address | null>(null)

  const cartSize = cart.length

  function addNewCoffeeOnCart(coffeeModel: Coffee, quantity: number) {
    const newCoffee: CoffeeOnCart = {
      coffeeModel,
      quantity,
    }
    setCart((state) => [...state, newCoffee])
  }

  return (
    <CoffeeCartContext.Provider
      value={{ cart, cartSize, address, addNewCoffeeOnCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}
