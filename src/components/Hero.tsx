import styled from 'styled-components'
import { Button } from './Button'

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: transparent;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl}
      ${({ theme }) => theme.spacing.lg};
  }
`

const HeroTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.charcoal},
    ${({ theme }) => theme.colors.slate}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 0 ${({ theme }) => theme.spacing.xxl} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  animation: fadeInUp 0.8s ease 0.2s backwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

const HeroImageContainer = styled.div`
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.lightGrey}
  );
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
  position: relative;
  animation: fadeInUp 0.8s ease 0.4s backwards;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px) scale(1.01);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(159, 168, 218, 0.1),
      transparent
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`

const ImagePlaceholder = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 500;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

const ButtonWrapper = styled.div`
  animation: fadeInUp 0.8s ease 0.6s backwards;
`

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Hero header</HeroTitle>
      <HeroSubtitle>Sub headline</HeroSubtitle>
      <HeroImageContainer>
        <ImagePlaceholder>Hero image</ImagePlaceholder>
      </HeroImageContainer>
      <ButtonWrapper>
        <Button onClick={() => console.log('CTA clicked')}>CTA button</Button>
      </ButtonWrapper>
    </HeroContainer>
  )
}
