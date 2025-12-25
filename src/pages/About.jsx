import React from 'react'
import { Container, Grid, Paper, Stack, Typography, Chip } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { profile, skills } from '../data/profile'

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <SectionHeader
        eyebrow="About"
        title="Builder mindset, clean engineering."
        subtitle="I like projects where good architecture, good tests, and good performance actually matter."
      />

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 2.6 }}>
            <Typography sx={{ opacity: 0.85 }}>
              {profile.intro}
            </Typography>
            <Typography sx={{ mt: 2, opacity: 0.85 }}>
              I’m especially into RAG, retrieval systems, and full-stack tooling that makes engineering teams faster.
              When I build things, I focus on: clear APIs, measurable wins, and a UI that doesn’t fight the user.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2.6 }}>
            <Typography sx={{ fontWeight: 900 }}>Skills Snapshot</Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <Typography sx={{ fontWeight: 800, opacity: 0.9 }}>{group}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                    {items.map((x) => (
                      <Chip key={x} label={x} variant="outlined" sx={{ mb: 1 }} />
                    ))}
                  </Stack>
                </div>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
