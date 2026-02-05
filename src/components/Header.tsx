import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #000;
  background-color: #fff;
`

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
`

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  background: none;
  border: 2px solid #000;
  padding: 0.5rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #000;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <MenuButton aria-label='Menu'>
        <span />
        <span />
        <span />
      </MenuButton>
    </HeaderContainer>
  )
}
