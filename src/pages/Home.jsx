import React from 'react'
import { Box, Button, Chip, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import { profile, highlights } from '../data/profile'
import { FadeUp } from '../components/Motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <FadeUp>
            <Typography variant="h1" sx={{ lineHeight: 1.05 }}>
              {profile.name}
            </Typography>
            <Typography sx={{ mt: 2, fontSize: 18, opacity: 0.86 }}>
              {profile.tagline}
            </Typography>
            <Typography sx={{ mt: 2, maxWidth: 640, opacity: 0.86 }}>
              {profile.intro}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
              <Chip label="Spring Boot" variant="outlined" />
              <Chip label="React" variant="outlined" />
              <Chip label="AWS" variant="outlined" />
              <Chip label="Kubernetes" variant="outlined" />
              <Chip label="RAG / Vector Search" variant="outlined" />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button
                component={NavLink}
                to="/projects"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: 'none', fontWeight: 800 }}
              >
                See Projects
              </Button>
              <Button
                component={NavLink}
                to="/resume"
                variant="outlined"
                sx={{ textTransform: 'none', fontWeight: 800 }}
              >
                Resume
              </Button>
              <Button
                component={Link}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                variant="text"
                endIcon={<OpenInNewIcon />}
                sx={{ textTransform: 'none', fontWeight: 800 }}
              >
                GitHub
              </Button>
            </Stack>
          </FadeUp>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            {highlights.map((h, idx) => (
              <Grid item xs={12} sm={4} key={h.title}>
                <FadeUp delay={0.05 * idx}>
                  <Paper sx={{ p: 2.2, height: '100%' }}>
                    <Typography sx={{ fontWeight: 900 }}>{h.title}</Typography>
                    <Typography sx={{ mt: 1, opacity: 0.82, fontSize: 14 }}>
                      {h.body}
                    </Typography>
                  </Paper>
                </FadeUp>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <FadeUp delay={0.1}>
            <Paper sx={{ p: 2.6, height: '100%' }}>
              <Typography sx={{ fontWeight: 900, fontSize: 16 }}>Quick Links</Typography>
              <Stack sx={{ mt: 2 }} spacing={1.2}>
                <QuickLink label="LinkedIn" href={profile.linkedin} />
                <QuickLink label="Email" href={`mailto:${profile.email}`} />
                <QuickLink label="Phone" href={`tel:${profile.phone}`} />
              </Stack>

              <Box sx={{ mt: 3.5 }}>
                <Typography sx={{ fontWeight: 900, fontSize: 16 }}>What I’m focused on</Typography>
                <Typography sx={{ mt: 1.2, opacity: 0.82 }}>
                  Building systems that are fast, reliable, and easy for teams to ship — from CI dashboards to ML retrieval pipelines.
                </Typography>
              </Box>

              <Box sx={{ mt: 3.5 }}>
                <Typography sx={{ fontWeight: 900, fontSize: 16 }}>Best way to use this site</Typography>
                <Typography sx={{ mt: 1.2, opacity: 0.82 }}>
                  Start at <Link component={NavLink} to="/projects">Projects</Link> and click into anything that matches the role.
                </Typography>
              </Box>
            </Paper>
          </FadeUp>
        </Grid>
      </Grid>
    </Container>
  )
}

function QuickLink({ label, href }) {
  return (
    <Paper sx={{ p: 1.4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ fontWeight: 800 }}>{label}</Typography>
      <Link href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noreferrer" sx={{ opacity: 0.9 }}>
        {href.replace('mailto:', '').replace('tel:', '')}
      </Link>
    </Paper>
  )
}
