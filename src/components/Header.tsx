import styled from 'styled-components'
import { useState } from 'react'
import { Menu } from './Menu'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({ theme }) => theme.transitions.normal};
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.charcoal},
    ${({ theme }) => theme.colors.lavender}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`

const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transform: scale(1.05);
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.charcoal};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: all ${({ theme }) => theme.transitions.fast};

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(45deg) translateY(8px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'};
    }
  }
`

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <Logo>Cool Rugelach</Logo>
        <MenuButton
          $isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Menu'
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </HeaderContainer>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
