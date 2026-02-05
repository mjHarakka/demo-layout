import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 2rem;
  border-top: 2px solid #000;
  background-color: #fff;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterContent = styled.div`
  color: #666;
  font-size: 0.875rem;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </FooterContent>
    </FooterContainer>
  )
}
