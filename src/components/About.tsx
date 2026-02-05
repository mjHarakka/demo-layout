import styled from 'styled-components'
import { useLanguage } from '../i18n/LanguageContext'

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const TextContent = styled.div``

const SectionTitle = styled.h2`
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

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1.0625rem;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const StatCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.ghostwhite},
    ${({ theme }) => theme.colors.lightGrey}
  );
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.lavender},
    ${({ theme }) => theme.colors.coral}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const ImagePlaceholder = styled.div`
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.lavender},
    ${({ theme }) => theme.colors.accentHover}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

export const About = () => {
  const { t } = useLanguage()

  return (
    <AboutContainer id='about'>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>{t.about.title}</SectionTitle>
          <Paragraph>{t.about.paragraph1}</Paragraph>
          <Paragraph>{t.about.paragraph2}</Paragraph>
          <StatsGrid>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>{t.about.stats.clients}</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>{t.about.stats.satisfaction}</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000+</StatNumber>
              <StatLabel>{t.about.stats.projects}</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>{t.about.stats.support}</StatLabel>
            </StatCard>
          </StatsGrid>
        </TextContent>
        <ImagePlaceholder>🏆</ImagePlaceholder>
      </ContentWrapper>
    </AboutContainer>
  )
}
