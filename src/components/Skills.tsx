import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.paper,
}))

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}))

const SkillCategory = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}))

const SkillList = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
}))

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Hibernate ORM', 'Spring Data JPA', 'React'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Maven', 'Jira', 'Confluence', 'Docker', 'Apache Tomcat'],
    },
    {
      title: 'Methodologies',
      skills: ['Agile (SCRUM)', 'OOP', 'MVC', 'RESTful API Design'],
    },
    {
      title: 'Soft Skills',
      skills: ['Verbal and Written Communication', 'Teamwork and Collaboration', 'Adaptability'],
    },
  ]

  return (
    <Box id="skills" component="section">
      <SkillsSection>
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
            Skills
          </Typography>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SkillCard elevation={3}>
                  <SkillCategory variant="h6">
                    {category.title}
                  </SkillCategory>
                  <SkillList variant="body1">
                    {category.skills.join(' • ')}
                  </SkillList>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SkillsSection>
    </Box>
  )
}

export default Skills 