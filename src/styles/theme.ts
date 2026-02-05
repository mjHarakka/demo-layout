export const theme = {
  colors: {
    // Primary palette
    ghostwhite: '#F8F8FF',
    charcoal: '#2C3E50',
    slate: '#546E7A',
    lavender: '#9FA8DA',
    coral: '#FF6B6B',

    // Neutral shades
    white: '#FFFFFF',
    lightGrey: '#E8EAF6',
    grey: '#90A4AE',
    darkGrey: '#455A64',

    // Semantic colors
    background: '#F8F8FF',
    surface: '#FFFFFF',
    text: {
      primary: '#2C3E50',
      secondary: '#546E7A',
      light: '#90A4AE',
    },
    accent: '#9FA8DA',
    accentHover: '#7986CB',
    danger: '#FF6B6B',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 3px rgba(44, 62, 80, 0.08)',
    md: '0 4px 6px rgba(44, 62, 80, 0.1)',
    lg: '0 10px 20px rgba(44, 62, 80, 0.12)',
    xl: '0 15px 30px rgba(44, 62, 80, 0.15)',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
}

export type Theme = typeof theme
