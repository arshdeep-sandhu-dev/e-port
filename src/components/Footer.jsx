import React from 'react'
import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <Box sx={{ mt: 12, py: 5, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} {profile.name}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href={profile.linkedin} target="_blank" rel="noreferrer" sx={{ color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}>
              LinkedIn
            </Link>
            <Link href={profile.github} target="_blank" rel="noreferrer" sx={{ color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}>
              GitHub
            </Link>
            <Link href={`mailto:${profile.email}`} sx={{ color: 'text.secondary', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}>
              {profile.email}
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
