import styled from 'styled-components'
import { Button } from './Button'
import { useLanguage } from '../i18n/LanguageContext'

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
`

const HeroImage = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const ButtonWrapper = styled.div`
  animation: fadeInUp 0.8s ease 0.6s backwards;
`

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <HeroContainer>
      <HeroTitle>{t.hero.title}</HeroTitle>
      <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
      <HeroImageContainer>
        <HeroImage
          viewBox='0 0 800 450'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#9FA8DA' stopOpacity={0.8} />
              <stop offset='50%' stopColor='#7986CB' stopOpacity={0.6} />
              <stop offset='100%' stopColor='#546E7A' stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id='grad2' x1='100%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#FF6B6B' stopOpacity={0.3} />
              <stop offset='100%' stopColor='#9FA8DA' stopOpacity={0.3} />
            </linearGradient>
          </defs>

          <rect width='800' height='450' fill='url(#grad1)' />

          <circle cx='650' cy='100' r='120' fill='url(#grad2)' opacity='0.5'>
            <animate
              attributeName='r'
              values='120;140;120'
              dur='4s'
              repeatCount='indefinite'
            />
          </circle>

          <circle cx='150' cy='350' r='100' fill='#F8F8FF' opacity='0.2'>
            <animate
              attributeName='cy'
              values='350;330;350'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          <rect
            x='300'
            y='150'
            width='200'
            height='200'
            fill='#2C3E50'
            opacity='0.15'
            transform='rotate(45 400 250)'
          >
            <animateTransform
              attributeName='transform'
              type='rotate'
              values='45 400 250;55 400 250;45 400 250'
              dur='6s'
              repeatCount='indefinite'
            />
          </rect>

          <polygon
            points='700,300 750,400 650,400'
            fill='#FF6B6B'
            opacity='0.3'
          >
            <animate
              attributeName='opacity'
              values='0.3;0.5;0.3'
              dur='2s'
              repeatCount='indefinite'
            />
          </polygon>

          <path
            d='M 0 225 Q 200 175 400 225 T 800 225'
            stroke='#F8F8FF'
            strokeWidth='3'
            fill='none'
            opacity='0.4'
          />
          <path
            d='M 0 250 Q 200 200 400 250 T 800 250'
            stroke='#F8F8FF'
            strokeWidth='2'
            fill='none'
            opacity='0.3'
          />
        </HeroImage>
      </HeroImageContainer>
      <ButtonWrapper>
        <Button onClick={() => console.log('CTA clicked')}>{t.hero.cta}</Button>
      </ButtonWrapper>
    </HeroContainer>
  )
}
