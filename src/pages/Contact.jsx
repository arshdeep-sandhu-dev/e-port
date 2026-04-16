import React from 'react'
import { Container, Grid, Link, Paper, Stack, Typography, Button, Box } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Contact() {
  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text) } catch {}
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Open to opportunities and always happy to connect."
      />

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3.5, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
            <Stack spacing={2}>
              <ContactRow icon={<EmailIcon sx={{ fontSize: 20 }} />} label="Email" value={profile.email} onCopy={() => copy(profile.email)} />
              <ContactRow icon={<PhoneIcon sx={{ fontSize: 20 }} />} label="Phone" value={profile.phone} onCopy={() => copy(profile.phone)} />
              <ContactLink icon={<LinkedInIcon sx={{ fontSize: 20 }} />} label="LinkedIn" href={profile.linkedin} />
              <ContactLink icon={<GitHubIcon sx={{ fontSize: 20 }} />} label="GitHub" href={profile.github} />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3.5, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
            <Typography sx={{ fontWeight: 700 }}>Prefer email?</Typography>
            <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.9rem' }}>
              Feel free to reach out about roles, projects, or just to say hi. I typically respond within a day.
            </Typography>
            <Button
              sx={{ mt: 2.5 }}
              variant="contained"
              href={`mailto:${profile.email}`}
              startIcon={<EmailIcon />}
              size="small"
            >
              Send Email
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

function ContactRow({ icon, label, value, onCopy }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box sx={{ color: 'text.secondary' }}>{icon}</Box>
        <div>
          <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>{value}</Typography>
        </div>
      </Stack>
      <Button onClick={onCopy} variant="text" size="small" startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
        Copy
      </Button>
    </Box>
  )
}

function ContactLink({ icon, label, href }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box sx={{ color: 'text.secondary' }}>{icon}</Box>
        <div>
          <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
            <Link href={href} target="_blank" rel="noreferrer" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              {href.replace('https://', '')}
            </Link>
          </Typography>
        </div>
      </Stack>
      <Button component={Link} href={href} target="_blank" rel="noreferrer" variant="text" size="small" endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
        Open
      </Button>
    </Box>
  )
}
