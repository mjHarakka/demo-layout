import styled from 'styled-components'

const ServicesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: transparent;
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

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.125rem;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`

const ServiceCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  border-top: 4px solid ${({ theme }) => theme.colors.lavender};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ServiceTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.charcoal};
`

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ServiceListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.lavender};
    font-weight: bold;
  }
`

const services = [
  {
    icon: '💼',
    title: 'Business Strategy',
    description:
      'Comprehensive strategic planning to help your business reach new heights.',
    features: [
      'Market Analysis',
      'Competitive Research',
      'Growth Planning',
      'KPI Development',
    ],
  },
  {
    icon: '🎨',
    title: 'Design Services',
    description:
      'Beautiful, modern designs that capture attention and drive engagement.',
    features: [
      'Brand Identity',
      'UI/UX Design',
      'Graphic Design',
      'Prototyping',
    ],
  },
  {
    icon: '💻',
    title: 'Development',
    description:
      'Cutting-edge development solutions built with the latest technologies.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'API Development',
      'Cloud Integration',
    ],
  },
  {
    icon: '📈',
    title: 'Marketing',
    description:
      'Data-driven marketing strategies that deliver measurable results.',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media',
      'Email Campaigns',
    ],
  },
]

export const Services = () => {
  return (
    <ServicesContainer id='services'>
      <SectionTitle>Our Services</SectionTitle>
      <SectionSubtitle>
        Comprehensive solutions tailored to your business needs. We offer a full
        range of services to help you succeed.
      </SectionSubtitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceList>
              {service.features.map((feature, idx) => (
                <ServiceListItem key={idx}>{feature}</ServiceListItem>
              ))}
            </ServiceList>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}
