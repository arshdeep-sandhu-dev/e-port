import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { experience } from '../data/profile'
import { FadeUp } from '../components/Motion'

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked."
        subtitle="Building enterprise systems and shipping production software."
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {experience.map((e, idx) => (
          <FadeUp key={e.role + e.dates} delay={0.06 * idx}>
            <Paper
              sx={{
                p: 3.5,
                borderLeft: '3px solid',
                borderLeftColor: idx === 0 ? 'primary.main' : 'rgba(255,255,255,0.1)',
                '&:hover': { borderColor: 'rgba(255,255,255,0.12)', borderLeftColor: 'primary.main' }
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 0.5
              }}>
                <div>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                    {e.role}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                    {e.company}
                  </Typography>
                </div>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {e.dates}
                </Typography>
              </Box>
              <Box component="ul" sx={{ mt: 2, mb: 0, pl: 2, '& li': { mb: 0.75 } }}>
                {e.bullets.map((b, i) => (
                  <li key={i}>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>{b}</Typography>
                  </li>
                ))}
              </Box>
            </Paper>
          </FadeUp>
        ))}
      </Box>
    </Container>
  )
}
