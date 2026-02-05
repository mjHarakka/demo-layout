import styled, { ThemeProvider } from 'styled-components'
import {
  Header,
  Hero,
  Footer,
  Features,
  CTA,
  Services,
  About,
  Contact,
} from './components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { LanguageProvider } from './i18n/LanguageContext'

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
      <LanguageProvider>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <MainContent>
            <div id='home'>
              <Hero />
            </div>
            <Services />
            <About />
            <Features />
            <CTA />
            <Contact />
          </MainContent>
          <Footer />
        </AppContainer>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
