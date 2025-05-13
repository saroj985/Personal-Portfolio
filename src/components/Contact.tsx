import { Box, Container, Typography, Grid, Paper, TextField, Button, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.mode === 'light' 
    ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.1), transparent)',
  },
}))

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  background: theme.palette.mode === 'light'
    ? 'rgba(255, 255, 255, 0.99)'
    : 'rgba(30, 41, 59, 0.99)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)'}`,
  borderRadius: theme.spacing(4),
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[12],
  },
}))

const ContactButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  width: '100%',
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
  background: theme.palette.mode === 'light'
    ? 'rgba(255, 255, 255, 0.9)'
    : 'rgba(30, 41, 59, 0.9)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
    background: theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(30, 41, 59, 1)',
  },
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1.5),
  },
}))

const Contact = () => {
  return (
    <Box id="contact" component="section">
      <ContactSection>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 10,
              fontWeight: 800,
              letterSpacing: '-1.5px',
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #0f172a 30%, #1e293b 90%)'
                  : 'linear-gradient(45deg, #e2e8f0 30%, #cbd5e1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Let's Connect
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} md={4} component="div">
              <ContactCard elevation={0}>
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  color="primary" 
                  fontWeight="700"
                  sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2rem' } }}
                >
                  Get in Touch
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  color="text.secondary" 
                  sx={{ 
                    mb: 5, 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    opacity: 0.9
                  }}
                >
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </Typography>
                <Box>
                  <Link
                    href="mailto:sarojshrestha@gmail.com"
                    underline="none"
                    sx={{ display: 'block', width: '100%' }}
                  >
                    <ContactButton
                      variant="text"
                      startIcon={<EmailIcon />}
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      sarojshrestha@gmail.com
                    </ContactButton>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/sarojshrestha"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ display: 'block', width: '100%' }}
                  >
                    <ContactButton
                      variant="text"
                      startIcon={<LinkedInIcon />}
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      LinkedIn
                    </ContactButton>
                  </Link>
                  <Link
                    href="https://github.com/saroj985"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ display: 'block', width: '100%' }}
                  >
                    <ContactButton
                      variant="text"
                      startIcon={<GitHubIcon />}
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      github.com/saroj985
                    </ContactButton>
                  </Link>
                </Box>
              </ContactCard>
            </Grid>

            <Grid item xs={12} md={8} component="div">
              <ContactCard elevation={0}>
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  color="primary" 
                  fontWeight="700"
                  sx={{ mb: 5, fontSize: { xs: '1.75rem', md: '2rem' } }}
                >
                  Send a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '1.1rem',
                        padding: '14px 18px',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '1.1rem',
                        padding: '14px 18px',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '1.1rem',
                        padding: '14px 18px',
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 5,
                      py: 2.2,
                      borderRadius: 5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: 'linear-gradient(45deg, #0f172a 30%, #1e293b 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1e293b 30%, #334155 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) => theme.shadows[8],
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </ContactCard>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
    </Box>
  )
}

export default Contact 