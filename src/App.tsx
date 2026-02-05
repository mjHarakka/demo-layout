import styled, { ThemeProvider } from 'styled-components'
import { Header, Hero, Footer } from './components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.ghostwhite} 0%,
    ${({ theme }) => theme.colors.lightGrey} 100%
  );
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <Hero />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
