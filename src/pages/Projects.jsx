import React from 'react'
import { Box, Chip, Container, Grid, Paper, Stack, Typography, Button, Link } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/profile'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { FadeUp } from '../components/Motion'

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built."
        subtitle="From production web apps to GPU-accelerated ML systems."
      />

      <Grid container spacing={2.5}>
        {projects.map((p, idx) => (
          <Grid item xs={12} md={6} key={p.title} sx={{ display: 'flex' }}>
            <FadeUp delay={0.05 * idx}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': { borderColor: 'rgba(255,255,255,0.15)' }
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>{p.title}</Typography>
                <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: '0.8rem' }}>{p.dates}</Typography>

                <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.9rem' }}>
                  {p.summary}
                </Typography>

                <Stack direction="row" sx={{ mt: 2, flexWrap: 'wrap', gap: 0.75 }}>
                  {p.stack.map((s) => (
                    <Chip key={s} label={s} variant="outlined" size="small" />
                  ))}
                </Stack>

                <Box component="ul" sx={{ mt: 2, mb: 0, pl: 2, '& li': { mb: 0.5 } }}>
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>{b}</Typography>
                    </li>
                  ))}
                </Box>

                {p.videoUrl && (
                  <Box sx={{ mt: 2.5, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                      title={p.title}
                      src={p.videoUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    />
                  </Box>
                )}

                {p.siteUrl && (
                  <Box sx={{ mt: 2.5, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <iframe
                      title={p.title}
                      src={p.siteUrl}
                      style={{ width: '100%', height: 300, border: 0 }}
                    />
                  </Box>
                )}

                {p.links.length > 0 && (
                  <Box sx={{ mt: 'auto', pt: 2.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {p.links.map((l) => (
                      <Button
                        key={l.href}
                        component={Link}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        size="small"
                        endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          borderColor: 'rgba(255,255,255,0.12)',
                          color: 'text.primary',
                          '&:hover': { borderColor: 'rgba(255,255,255,0.25)' }
                        }}
                      >
                        {l.label}
                      </Button>
                    ))}
                  </Box>
                )}
              </Paper>
            </FadeUp>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
