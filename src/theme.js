import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3b82f6' },
    secondary: { main: '#64748b' },
    background: {
      default: '#09090b',
      paper: 'rgba(23, 23, 26, 0.7)'
    },
    text: {
      primary: '#fafafa',
      secondary: 'rgba(250, 250, 250, 0.6)'
    }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h2: { fontSize: '1.85rem', fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontSize: '1.3rem', fontWeight: 600 },
    body1: { lineHeight: 1.7, fontSize: '0.95rem' },
    body2: { lineHeight: 1.6 }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'border-color 0.25s ease'
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.8rem',
          height: 28
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.1)'
        }
      }
    }
  }
})
