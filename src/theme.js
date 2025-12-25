import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#38BDF8' },   // sky
    secondary: { main: '#22C55E' }, // emerald
    background: {
      default: '#0B1020',
      paper: 'rgba(255,255,255,0.07)'
    }
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji'
    ].join(','),
    h1: { fontSize: '2.6rem', fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontSize: '1.8rem', fontWeight: 800, letterSpacing: -0.3 },
    h3: { fontSize: '1.35rem', fontWeight: 700 },
    body1: { lineHeight: 1.7 }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.10)'
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true }
    }
  }
})
