import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffeeCartContextProvider } from './contexts/CoffeeCartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router />
        </CoffeeCartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
