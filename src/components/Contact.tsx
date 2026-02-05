import styled from 'styled-components'
import { Button } from './Button'

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <ContactContainer id='contact'>
      <ContentWrapper>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a question or ready to start your project? We'd love to hear from
          you. Reach out and let's make something amazing together.
        </SectionSubtitle>
        <ContactGrid>
          <ContactInfo>
            <ContactItem>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>hello@coolrugelach.com</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>+1 (555) 123-4567</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Address</ContactLabel>
              <ContactValue>
                123 Innovation Street
                <br />
                San Francisco, CA 94102
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Business Hours</ContactLabel>
              <ContactValue>
                Monday - Friday: 9:00 AM - 6:00 PM EST
                <br />
                Weekend: By Appointment
              </ContactValue>
            </ContactItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='name'>Name *</Label>
              <Input type='text' id='name' required placeholder='Your name' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'>Email *</Label>
              <Input
                type='email'
                id='email'
                required
                placeholder='your@email.com'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='message'>Message *</Label>
              <TextArea
                id='message'
                required
                placeholder='Tell us about your project...'
              />
            </FormGroup>
            <Button type='submit'>Send Message</Button>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </ContactContainer>
  )
}
