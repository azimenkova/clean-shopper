const tokens = {
  colors: {
    primary: {
      50: '#EFF5F1',
      100: '#D7E8DC',
      200: '#B0D1BA',
      300: '#88BA97',
      400: '#6AA47A',
      500: '#528C63',
      600: '#437350',
      700: '#345A3E',
      800: '#25412D',
      900: '#16281B',
    },
    accent: {
      50: '#EDF6F6',
      100: '#D0E8E8',
      200: '#A3D1D1',
      300: '#76BABA',
      400: '#5BA8A8',
      500: '#4A9494',
      600: '#3D7D7D',
      700: '#2D6363',
    },
    sand: {
      50: '#FDFBF8',
      100: '#F9F5EE',
      200: '#F1EBDF',
      300: '#E5DDD0',
      400: '#D4C9B8',
    },
    neutral: {
      50: '#FAFAF8',
      100: '#F5F4F2',
      200: '#E8E7E4',
      300: '#D4D2CE',
      400: '#B0ADA8',
      500: '#8C8983',
      600: '#6B6862',
      700: '#4A4843',
      800: '#2E2C28',
      900: '#1A1917',
    },
    success: {
      light: '#EBF5EF',
      DEFAULT: '#3D8B5E',
      dark: '#2D6844',
    },
    warning: {
      light: '#FDF5E6',
      DEFAULT: '#D4A843',
      dark: '#A07D2F',
    },
    error: {
      light: '#FAEDED',
      DEFAULT: '#C75450',
      dark: '#9C3F3C',
    },
    info: {
      light: '#EBF2F8',
      DEFAULT: '#5A8FB8',
      dark: '#436B8A',
    },
  },

  surfaces: {
    page: '#F9F5EE',
    card: '#FFFFFF',
    secondary: '#F1EBDF',
    overlay: 'rgba(42, 40, 36, 0.4)',
  },

  fontFamily: {
    primary: "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'SF Mono', 'Cascadia Code', 'Fira Code', monospace",
  },

  fontSize: {
    display: '3rem',
    h1: '2.4rem',
    h2: '1.875rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem',
    caption: '0.75rem',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.35,
    relaxed: 1.6,
    loose: 1.5,
  },

  letterSpacing: {
    tight: '-0.02em',
    snug: '-0.01em',
    normal: '0',
    wide: '0.04em',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
  },

  layout: {
    contentMaxWidth: '1120px',
    pageMarginDesktop: '4rem',
    pageMarginMobile: '1.5rem',
  },

  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },

  boxShadow: {
    sm: '0 1px 3px rgba(42, 40, 36, 0.06)',
    md: '0 4px 12px rgba(42, 40, 36, 0.08)',
    lg: '0 8px 24px rgba(42, 40, 36, 0.12)',
  },

  motion: {
    duration: {
      fast: '120ms',
      normal: '200ms',
      slow: '350ms',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      in: 'cubic-bezier(0.42, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.58, 1)',
    },
  },

  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export default tokens;
