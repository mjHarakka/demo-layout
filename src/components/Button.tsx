import styled from 'styled-components'

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.lavender},
    ${({ theme }) => theme.colors.accentHover}
  );
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.charcoal},
      ${({ theme }) => theme.colors.slate}
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  span {
    position: relative;
    z-index: 1;
  }
`

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  children,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </StyledButton>
  )
}
