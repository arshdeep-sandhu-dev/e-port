import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { experience } from '../data/profile'
import { FadeUp } from '../components/Motion'

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <SectionHeader
        eyebrow="Experience"
        title="Work that impacted real teams."
        subtitle="I focus on shipping reliable systems and making other devs faster."
      />

      <Grid container spacing={2.5}>
        {experience.map((e, idx) => (
          <Grid item xs={12} key={e.role}>
            <FadeUp delay={0.05 * idx}>
              <Paper sx={{ p: 2.6 }}>
                <Typography sx={{ fontWeight: 950, fontSize: 18 }}>
                  {e.role} — {e.company}
                </Typography>
                <Typography sx={{ mt: 0.7, opacity: 0.75, fontSize: 14 }}>
                  {e.dates}
                </Typography>
                <Box component="ul" sx={{ mt: 1.4, mb: 0, pl: 2.2 }}>
                  {e.bullets.map((b, i) => (
                    <li key={i}><Typography sx={{ opacity: 0.86 }}>{b}</Typography></li>
                  ))}
                </Box>
              </Paper>
            </FadeUp>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
