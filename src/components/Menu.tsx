import styled from 'styled-components'

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(44, 62, 80, 0.8);
  backdrop-filter: blur(8px);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all ${({ theme }) => theme.transitions.normal};
`

const MenuContainer = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: min(400px, 80%);
  height: 100vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.ghostwhite}
  );
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.xxl};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transform: rotate(90deg);
  }
`

const MenuTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.charcoal},
    ${({ theme }) => theme.colors.lavender}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const MenuItem = styled.li`
  width: 100%;
`

const MenuLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.accentHover}
    );
    color: ${({ theme }) => theme.colors.white};
    transform: translateX(8px);
  }
`

const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`

const ContactInfo = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  line-height: 1.6;
`

const ContactItem = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0;
`

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <>
      <MenuOverlay $isOpen={isOpen} onClick={onClose} />
      <MenuContainer $isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <MenuTitle>Navigation</MenuTitle>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              <MenuLink onClick={() => handleLinkClick(item.href)}>
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>
        <MenuDivider />
        <ContactInfo>
          <ContactItem>
            <strong>Email:</strong> hello@coolrugelach.com
          </ContactItem>
          <ContactItem>
            <strong>Phone:</strong> +1 (555) 123-4567
          </ContactItem>
          <ContactItem>
            <strong>Hours:</strong> Mon-Fri, 9am-6pm EST
          </ContactItem>
        </ContactInfo>
      </MenuContainer>
    </>
  )
}
