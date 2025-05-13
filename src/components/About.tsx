import { Box, Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { keyframes } from '@mui/system'

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

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  background: theme.palette.mode === 'light' 
    ? '#ffffff'
    : '#000000',
  color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: theme.palette.mode === 'light'
      ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
  }
}))

const ExperienceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '18px',
  background: theme.palette.mode === 'light'
    ? 'rgba(0,0,0,0.02)'
    : 'rgba(255,255,255,0.02)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'scale(1.02)',
    background: theme.palette.mode === 'light'
      ? 'rgba(0,0,0,0.03)'
      : 'rgba(255,255,255,0.03)',
  }
}))

const AnimatedTypography = styled(Typography)({
  animation: `${fadeIn} 1s ease-out`,
})

const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <AnimatedTypography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 600,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          About Me
        </AnimatedTypography>
        
        <AnimatedTypography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          I'm Saroj Shrestha, a Full Stack Developer based in Salt Lake City, UT, with a focus on Java, Spring Boot, SQL, and RESTful APIs. I enjoy building efficient backend systems and user-friendly applications.
          <br /><br />
          I'm passionate about writing clean code, solving problems, and collaborating in Agile teams. I'm eager to continue learning and growing as a Software Developer, contributing to innovative and impactful projects.
        </AnimatedTypography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ExperienceCard>
              <AnimatedTypography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                Experience
              </AnimatedTypography>
              <AnimatedTypography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Software Developer, Intern
              </AnimatedTypography>
              <AnimatedTypography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
                  mb: 1,
                  fontSize: '1.1rem',
                }}
              >
                O. C. Tanner
              </AnimatedTypography>
              <AnimatedTypography
                variant="subtitle2"
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                Jan 2025 – Apr 2025 | Hybrid – Salt Lake City, UT
              </AnimatedTypography>
              <AnimatedTypography
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                • Contributed to all phases of the software development life cycle, including analysis, design,
                development, testing, deployment, and production support. Managed source code with Git and
                deployed applications using Docker.
                <br /><br />
                • Participated in Agile SCRUM activities such as daily stand-ups, sprint planning and retrospectives.
                <br /><br />
                • Developed backend services using Spring Boot and implemented the data access layer with PostgreSQL
                and Spring Data JPA.
              </AnimatedTypography>
            </ExperienceCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard>
              <AnimatedTypography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                Education
              </AnimatedTypography>
              <AnimatedTypography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Full-Stack Java Development Program
              </AnimatedTypography>
              <AnimatedTypography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
                  mb: 1,
                  fontSize: '1.1rem',
                }}
              >
                Zorba SoftED
              </AnimatedTypography>
              <AnimatedTypography
                variant="subtitle2"
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                Sep 2024 – Apr 2025 | Online
              </AnimatedTypography>
              <AnimatedTypography
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                • Completed comprehensive training in Core Java, Spring Framework, Hibernate ORM, and Spring Boot.
                <br /><br />
                • Developed a web application for managing book records, utilizing Spring Boot for backend development
                and MySQL for data storage and retrieval.
                <br /><br />
                • Designed and implemented RESTful APIs and applied MVC architecture in real-world projects.
                <br /><br />
                • Focused on clean code practices, debugging techniques, and collaborative software development
                methodologies.
              </AnimatedTypography>
            </ExperienceCard>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  )
}

export default About 