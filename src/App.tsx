import styled from 'styled-components'
import { Header, Hero, Footer } from './components'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Hero />
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App
