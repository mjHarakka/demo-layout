import styled from 'styled-components'
import { Button } from './Button'

const CTAContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.lavender},
    ${({ theme }) => theme.colors.accentHover}
  );
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-30px, -30px);
    }
  }
`

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
`

const CTADescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;
`

const CTAButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.charcoal};

  &::before {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.lightGrey},
      ${({ theme }) => theme.colors.grey}
    );
  }
`

export const CTA = () => {
  return (
    <CTAContainer>
      <CTAContent>
        <CTATitle>Ready to Get Started?</CTATitle>
        <CTADescription>
          Join hundreds of satisfied clients who've transformed their business
          with Cool Rugelach. Let's create something amazing together.
        </CTADescription>
        <CTAButtonWrapper>
          <Button onClick={() => console.log('Get Started')}>
            Get Started Now
          </Button>
          <SecondaryButton onClick={() => console.log('Learn More')}>
            Learn More
          </SecondaryButton>
        </CTAButtonWrapper>
      </CTAContent>
    </CTAContainer>
  )
}
