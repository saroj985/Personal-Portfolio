import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default,
}))

const ProjectCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}))

const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}))

const TechChip = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '0.875rem',
  fontWeight: 500,
}))

const Projects = () => {
  const projects = [
    {
      title: 'Book Management System',
      description: 'A Spring web application for managing book records, following MVC architecture. Implemented Spring Data JPA for database operations, reducing boilerplate code by 40%.',
      technologies: ['Spring', 'JSP', 'MySQL', 'Data JPA'],
      features: [
        'Developed a Spring web application for book management, following MVC architecture',
        'Implemented Spring Data JPA for database operations, reducing boilerplate code by 40%',
        'Managed builds and dependencies with Maven and deployed locally on Apache Tomcat server',
        'Implemented RESTful APIs for CRUD operations and integrated them with a basic frontend using JSP, HTML, and CSS',
      ],
      githubLink: '#', // Replace with actual GitHub link
    },
  ]

  return (
    <Box id="projects" component="section">
      <ProjectsSection>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)'
                  : 'linear-gradient(45deg, #90caf9 30%, #4fc3f7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <ProjectCard elevation={3}>
                  <Typography variant="h5" gutterBottom color="primary" fontWeight="600">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" paragraph color="text.secondary">
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <TechStack>
                    {project.technologies.map((tech, idx) => (
                      <TechChip key={idx}>{tech}</TechChip>
                    ))}
                  </TechStack>
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source Code
                    </Button>
                  </Box>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ProjectsSection>
    </Box>
  )
}

export default Projects 