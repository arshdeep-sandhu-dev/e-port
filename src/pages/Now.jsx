import React from 'react'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { FadeUp } from '../components/Motion'

const LAST_UPDATED = 'April 2026'

const sections = [
  {
    heading: 'Working on',
    items: [
      'Shipping batch processing systems at USAA — Spring Batch jobs that aggregate enterprise-wide loss data for General Ledger reporting.',
      'Finishing the DB2 → Oracle migration: rewriting the remaining APIs and driving backend test coverage above 90%.',
    ]
  },
  {
    heading: 'Learning',
    items: [
      'Deeper Spring Batch internals — partitioning, remote chunking, and how to reason about restartability at scale.',
      'Oracle-specific performance tuning (execution plans, indexing strategies, bind variable patterns).',
      // TODO: Swap in whatever you\'re actually learning this month — a book, course, side project, new lang.
    ]
  },
  {
    heading: 'Reading',
    items: [
      // TODO: Replace with whatever\'s on your desk this month. Good defaults below.
      '"Designing Data-Intensive Applications" — Kleppmann.',
      'Release It! — Michael Nygard.',
    ]
  },
  {
    heading: 'Building on the side',
    items: [
      'Small tooling for OSRSRecipes.com — keeping the market data pipeline fresh.',
      // TODO: Add any personal/weekend projects. If none, delete this section.
    ]
  },
  {
    heading: 'Life',
    items: [
      'Cooking more — currently obsessed with getting salmon right.',
      'San Antonio, TX. Hiking when the weather allows.',
      // TODO: Edit freely. Keep this one human — it\'s the part recruiters remember.
    ]
  }
]

export default function Now() {
  return (
    <Container maxWidth="md" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Now"
        title="What I'm focused on right now."
        subtitle={`A snapshot of what's taking up my headspace. Inspired by Derek Sivers' /now page. Last updated ${LAST_UPDATED}.`}
      />

      <Stack spacing={2.5}>
        {sections.map((section, idx) => (
          <FadeUp key={section.heading} delay={0.06 * idx}>
            <Paper
              sx={{
                p: 3.5,
                '&:hover': { borderColor: 'rgba(255,255,255,0.12)' }
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  mb: 1.5
                }}
              >
                {section.heading}
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 1 } }}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Paper>
          </FadeUp>
        ))}
      </Stack>

      <FadeUp delay={0.4}>
        <Typography sx={{ mt: 5, color: 'text.secondary', fontSize: '0.85rem', fontStyle: 'italic' }}>
          This page is intentionally current. If you're reading it long after {LAST_UPDATED}, it's probably stale —
          {' '}<Box component="a" href="mailto:arsh.sandhu.dev@gmail.com" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>ping me</Box> and I'll refresh it.
        </Typography>
      </FadeUp>
    </Container>
  )
}
