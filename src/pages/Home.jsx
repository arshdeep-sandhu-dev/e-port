import React from 'react'
import { Box, Button, Chip, Container, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import { profile, highlights, stats } from '../data/profile'
import { FadeUp } from '../components/Motion'
import CountUp from '../components/CountUp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 14 }, pb: 8 }}>
      <FadeUp>
        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', rowGap: 1 }}>
          <Chip
            label={
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
                <Box
                  component="span"
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    boxShadow: '0 0 8px rgba(34,197,94,0.8)',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 }
                    }
                  }}
                />
                Open to opportunities
              </Box>
            }
            size="small"
            sx={{
              backgroundColor: 'rgba(34,197,94,0.08)',
              color: '#4ade80',
              border: '1px solid rgba(34,197,94,0.2)',
              fontWeight: 600,
              fontSize: '0.8rem',
              '& .MuiChip-label': { display: 'flex', alignItems: 'center' }
            }}
          />
          <Chip
            label="Software Engineer at USAA"
            size="small"
            sx={{
              backgroundColor: 'rgba(59,130,246,0.1)',
              color: 'primary.main',
              border: '1px solid rgba(59,130,246,0.2)',
              fontWeight: 600,
              fontSize: '0.8rem'
            }}
          />
        </Stack>

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
            <IconButton
              component={Link}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              size="small"
              aria-label="LinkedIn profile"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={Link}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              size="small"
              aria-label="GitHub profile"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={Link}
              href={`mailto:${profile.email}`}
              size="small"
              aria-label="Email Arshdeep"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </FadeUp>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <FadeUp>
          <Typography
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'text.secondary',
              mb: 2.5
            }}
          >
            By the Numbers
          </Typography>
        </FadeUp>
        <Grid container spacing={2}>
          {stats.map((s, idx) => (
            <Grid item xs={6} md={3} key={s.label}>
              <FadeUp delay={0.06 * idx}>
                <Box
                  sx={{
                    py: 2.5,
                    borderTop: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <CountUp
                    target={s.value}
                    sx={{
                      fontSize: { xs: '1.8rem', md: '2.4rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                      color: 'text.primary',
                      display: 'block'
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: '0.8rem',
                      color: 'text.secondary',
                      lineHeight: 1.4
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              </FadeUp>
            </Grid>
          ))}
        </Grid>
        <FadeUp delay={0.25}>
          <Button
            component={NavLink}
            to="/case-study/usaa"
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
            sx={{
              mt: 2,
              ml: -1,
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.85rem',
              '&:hover': { backgroundColor: 'rgba(59,130,246,0.08)' }
            }}
          >
            Read the case study: DB2 → Oracle migration
          </Button>
        </FadeUp>
      </Box>

      <Grid container spacing={2.5} sx={{ mt: 6 }}>
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
