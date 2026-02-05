import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.lavender},
      transparent
    );
  }
`

const FooterContent = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.875rem;
  z-index: 1;
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
