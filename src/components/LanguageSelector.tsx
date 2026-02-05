import styled from 'styled-components'
import { useLanguage } from '../i18n/LanguageContext'

const LanguageSwitcher = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
`

const LanguageButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.lavender : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.lavender};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }) => theme.colors.lavender};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
  }
`

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <LanguageSwitcher>
      <LanguageButton
        $active={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </LanguageButton>
      <LanguageButton
        $active={language === 'fi'}
        onClick={() => setLanguage('fi')}
      >
        FI
      </LanguageButton>
    </LanguageSwitcher>
  )
}
