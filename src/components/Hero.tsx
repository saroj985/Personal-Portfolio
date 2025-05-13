import { Box, Container, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { keyframes } from '@mui/system'
import { useEffect } from 'react'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.mode === 'light' 
    ? '#ffffff'
    : '#000000',
  color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
  paddingTop: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'light'
      ? 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)'
      : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)',
    animation: `${fadeIn} 2s ease-out`,
  },
}))

const AnimatedTypography = styled(Typography)({
  animation: `${fadeIn} 1s ease-out`,
})

const ModernButton = styled(Button)(({ theme }) => ({
  borderRadius: '980px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 400,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}))

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <AnimatedTypography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '3rem', md: '5rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Hi, I'm Saroj Shrestha
        </AnimatedTypography>
        <AnimatedTypography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 400,
            color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            letterSpacing: '-0.01em',
          }}
        >
          Full Stack Developer
        </AnimatedTypography>
        <AnimatedTypography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 8,
            color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.5,
            fontSize: '1.25rem',
            fontWeight: 400,
            letterSpacing: '0.01em',
          }}
        >
          Passionate about developing efficient backend systems and working in collaborative environments.
          Specializing in building scalable applications with modern technologies.
        </AnimatedTypography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          <ModernButton
            variant="contained"
            color="primary"
            size="large"
            onClick={() => scrollToSection('projects')}
            sx={{
              background: (theme) => theme.palette.mode === 'light' ? '#0071e3' : '#2997ff',
              '&:hover': {
                background: (theme) => theme.palette.mode === 'light' ? '#0077ed' : '#2d9dff',
              }
            }}
          >
            View My Work
          </ModernButton>
          <ModernButton
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => scrollToSection('contact')}
            sx={{
              borderWidth: 1,
              '&:hover': {
                borderWidth: 1,
                background: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
              }
            }}
          >
            Contact Me
          </ModernButton>
        </Box>
      </Container>
    </HeroSection>
  )
}

export default Hero 