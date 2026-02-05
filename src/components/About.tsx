import styled from 'styled-components'

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
  return (
    <AboutContainer id='about'>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>About Cool Rugelach</SectionTitle>
          <Paragraph>
            Founded in 2020, Cool Rugelach has been at the forefront of
            delivering exceptional services to businesses of all sizes. Our
            mission is to empower companies with innovative solutions that drive
            real, measurable results.
          </Paragraph>
          <Paragraph>
            With a team of experienced professionals and a passion for
            excellence, we've helped hundreds of clients transform their
            businesses and achieve their goals. We believe in building lasting
            partnerships and delivering value that goes beyond expectations.
          </Paragraph>
          <StatsGrid>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Satisfaction Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support Available</StatLabel>
            </StatCard>
          </StatsGrid>
        </TextContent>
        <ImagePlaceholder>🏆</ImagePlaceholder>
      </ContentWrapper>
    </AboutContainer>
  )
}
