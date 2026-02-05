import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 2rem);
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.7;
  }

  button {
    font-family: inherit;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrey};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`
