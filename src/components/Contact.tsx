import styled from 'styled-components'
import { Button } from './Button'
import { useLanguage } from '../i18n/LanguageContext'

const ContactContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xl};
  background: transparent;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.125rem;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const ContactItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:last-child {
    margin-bottom: 0;
  }
`

const ContactLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ContactValue = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`

const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-family: inherit;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lavender};
    box-shadow: 0 0 0 3px rgba(159, 168, 218, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lavender};
    box-shadow: 0 0 0 3px rgba(159, 168, 218, 0.1);
  }
`

export const Contact = () => {
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <ContactContainer id='contact'>
      <ContentWrapper>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <SectionSubtitle>{t.contact.subtitle}</SectionSubtitle>
        <ContactGrid>
          <ContactInfo>
            <ContactItem>
              <ContactLabel>{t.contact.info.email}</ContactLabel>
              <ContactValue>{t.contact.contactEmail}</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>{t.contact.info.phone}</ContactLabel>
              <ContactValue>{t.contact.contactPhone}</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>{t.contact.info.address}</ContactLabel>
              <ContactValue>
                {t.contact.info.addressValue.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>{t.contact.info.hours}</ContactLabel>
              <ContactValue>
                {t.contact.info.hoursValue.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </ContactValue>
            </ContactItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='name'>{t.contact.form.name} *</Label>
              <Input
                type='text'
                id='name'
                required
                placeholder={t.contact.form.namePlaceholder}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'>{t.contact.form.email} *</Label>
              <Input
                type='email'
                id='email'
                required
                placeholder={t.contact.form.emailPlaceholder}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='message'>{t.contact.form.message} *</Label>
              <TextArea
                id='message'
                required
                placeholder={t.contact.form.messagePlaceholder}
              />
            </FormGroup>
            <Button type='submit'>{t.contact.form.submit}</Button>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </ContactContainer>
  )
}
