import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useMemo, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
          },
          secondary: {
            main: '#f50057',
            light: '#ff4081',
            dark: '#c51162',
          },
          background: {
            default: mode === 'light' ? '#fafafa' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            letterSpacing: '-0.01562em',
          },
          h2: {
            fontWeight: 700,
            letterSpacing: '-0.00833em',
          },
          h3: {
            fontWeight: 600,
            letterSpacing: '0em',
          },
          h4: {
            fontWeight: 600,
            letterSpacing: '0.00735em',
          },
          h5: {
            fontWeight: 500,
            letterSpacing: '0em',
          },
          h6: {
            fontWeight: 500,
            letterSpacing: '0.0075em',
          },
          button: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: '8px 16px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: mode === 'light' 
                  ? '0 4px 6px rgba(0, 0, 0, 0.1)'
                  : '0 4px 6px rgba(0, 0, 0, 0.3)',
              },
            },
          },
        },
      }),
    [mode],
  )

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar toggleColorMode={toggleColorMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
