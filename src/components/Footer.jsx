import React from 'react'
import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const linkStyle = {
  color: 'text.secondary',
  fontSize: '0.85rem',
  textDecoration: 'none',
  '&:hover': { color: 'text.primary' }
}

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
            <Link component={NavLink} to="/now" sx={linkStyle}>
              Now
            </Link>
            <Link href={profile.linkedin} target="_blank" rel="noreferrer" sx={linkStyle}>
              LinkedIn
            </Link>
            <Link href={profile.github} target="_blank" rel="noreferrer" sx={linkStyle}>
              GitHub
            </Link>
            <Link href={`mailto:${profile.email}`} sx={linkStyle}>
              {profile.email}
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
