import React, { useState } from 'react'
import { Box, Container, Grid, Paper, Stack, Typography, Chip, IconButton } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { profile, skills } from '../data/profile'
import { FadeUp } from '../components/Motion'
import SchoolIcon from '@mui/icons-material/School'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const photos = [
  { src: '/usaaNotebook.jpeg', caption: 'I interned at USAA and started full time in January 2026.' },
  { src: '/hiking.jpeg', caption: 'I love being outdoors and hiking.' },
  { src: '/holdingivy.jpg', caption: 'I also especially love my cat Ivy.' },
  { src: '/gym.jpeg', caption: 'I also enjoy going to the gym.' },
  { src: '/ivy.jpeg', caption: "Another Ivy picture cause c'mon she's adorable." },
  { src: '/salmon.jpeg', caption: 'I really enjoy cooking.' },
  { src: '/fullbelly.jpeg', caption: 'Even more than that I enjoy eating.' },
  { src: '/thinkingcat.jpg', caption: 'Hmm what elseee...' },
  { src: '/idk.jpeg', caption: 'Nope I think that\'s it!' },
]

export default function About() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1))

  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="About"
        title="Engineer first, always."
        subtitle="I care about writing clean, scalable code that solves real problems."
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <FadeUp>
            <Paper sx={{ p: 3.5, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {profile.intro}
              </Typography>
              <Typography sx={{ mt: 2.5, color: 'text.secondary', lineHeight: 1.8 }}>
                Currently at USAA, I work on enterprise financial systems serving 13M+ members —
                building backend services, leading database migrations, and shipping batch processing
                systems that directly impact operational costs.
              </Typography>
            </Paper>
          </FadeUp>

          <FadeUp delay={0.08}>
            <Paper sx={{ p: 3.5, mt: 2.5, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SchoolIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                <Typography sx={{ fontWeight: 700 }}>Education</Typography>
              </Stack>
              <Typography sx={{ mt: 2, fontWeight: 600 }}>{profile.education.school}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                {profile.education.degree}, Concentration in {profile.education.concentration}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  GPA: {profile.education.gpa}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  {profile.education.dates}
                </Typography>
              </Stack>
            </Paper>
          </FadeUp>
        </Grid>

        <Grid item xs={12} md={5}>
          <FadeUp delay={0.05}>
            <Paper sx={{ p: 3.5, height: '100%', '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
              <Typography sx={{ fontWeight: 700, mb: 2.5 }}>Skills</Typography>
              <Stack spacing={2.5}>
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1 }}>
                      {group}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                      {items.map((x) => (
                        <Chip key={x} label={x} variant="outlined" size="small" />
                      ))}
                    </Stack>
                  </div>
                ))}
              </Stack>
            </Paper>
          </FadeUp>
        </Grid>
      </Grid>

      {/* Photo Gallery */}
      <FadeUp delay={0.12}>
        <Paper sx={{ mt: 4, p: 3.5, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
          <Typography sx={{ fontWeight: 700, mb: 2.5 }}>Beyond the code</Typography>

          <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxHeight: 480,
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }}
            >
              <Box
                component="img"
                src={photos[current].src}
                alt={photos[current].caption}
                sx={{
                  maxWidth: '100%',
                  maxHeight: 480,
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Navigation arrows */}
            <IconButton
              onClick={prev}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={next}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* Caption */}
            <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '0.95rem', textAlign: 'center' }}>
              {photos[current].caption}
            </Typography>

            {/* Dots */}
            <Stack direction="row" spacing={0.75} sx={{ mt: 1.5 }}>
              {photos.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: idx === current ? 'primary.main' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>
      </FadeUp>
    </Container>
  )
}
