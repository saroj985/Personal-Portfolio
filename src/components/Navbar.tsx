import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)'
    : 'linear-gradient(90deg, #059669 0%, #2563eb 100%)',
  backdropFilter: 'none',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  margin: theme.spacing(0, 1),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: 0,
    left: '50%',
    background: '#ffffff',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '100%',
  },
}))

interface NavbarProps {
  toggleColorMode: () => void
}

const Navbar = ({ toggleColorMode }: NavbarProps) => {
  const theme = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
          <NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton>
          <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
          <IconButton 
            onClick={toggleColorMode} 
            color="inherit"
            sx={{ 
              ml: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'rotate(180deg)',
              }
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Navbar 