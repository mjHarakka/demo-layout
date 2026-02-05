import styled from 'styled-components'
import { useLanguage } from '../i18n/LanguageContext'

const FeaturesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.charcoal},
    ${({ theme }) => theme.colors.lavender}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`

const FeatureCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.ghostwhite},
    ${({ theme }) => theme.colors.white}
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.coral}
    );
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: grayscale(20%);
`

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.charcoal};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`

export const Features = () => {
  const { t } = useLanguage()

  return (
    <FeaturesContainer>
      <SectionTitle>{t.features.title}</SectionTitle>
      <FeaturesGrid>
        {t.features.items.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{['🎯', '⚡', '🛡️'][index]}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  )
}
