import React from 'react'
import { Box, Button, Chip, Container, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import { profile, highlights } from '../data/profile'
import { FadeUp } from '../components/Motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 14 }, pb: 8 }}>
      <FadeUp>
        <Chip
          label="Software Engineer at USAA"
          size="small"
          sx={{
            mb: 3,
            backgroundColor: 'rgba(59,130,246,0.1)',
            color: 'primary.main',
            border: '1px solid rgba(59,130,246,0.2)',
            fontWeight: 600,
            fontSize: '0.8rem'
          }}
        />

        <Typography variant="h1" sx={{ maxWidth: 700 }}>
          Building scalable systems{' '}
          <Box component="span" sx={{ color: 'text.secondary' }}>
            that serve millions.
          </Box>
        </Typography>

        <Typography sx={{ mt: 3, maxWidth: 560, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
          {profile.intro}
        </Typography>

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4, flexWrap: 'wrap' }}>
          <Button
            component={NavLink}
            to="/projects"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 3, py: 1 }}
          >
            View Projects
          </Button>
          <Button
            component={NavLink}
            to="/resume"
            variant="outlined"
            sx={{
              px: 3,
              py: 1,
              borderColor: 'rgba(255,255,255,0.15)',
              color: 'text.primary',
              '&:hover': { borderColor: 'rgba(255,255,255,0.3)' }
            }}
          >
            Resume
          </Button>
          <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
            <IconButton component={Link} href={profile.linkedin} target="_blank" rel="noreferrer" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton component={Link} href={profile.github} target="_blank" rel="noreferrer" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton component={Link} href={`mailto:${profile.email}`} size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </FadeUp>

      <Grid container spacing={2.5} sx={{ mt: 8 }}>
        {highlights.map((h, idx) => (
          <Grid item xs={12} sm={4} key={h.title}>
            <FadeUp delay={0.08 * idx}>
              <Paper sx={{ p: 3, height: '100%', '&:hover': { borderColor: 'rgba(255,255,255,0.15)' } }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{h.title}</Typography>
                <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.875rem' }}>
                  {h.body}
                </Typography>
              </Paper>
            </FadeUp>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
