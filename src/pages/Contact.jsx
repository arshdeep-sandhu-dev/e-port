import React from 'react'
import { Container, Grid, Link, Paper, Stack, Typography, Button } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function Contact() {
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      console.error('Failed to copy text to clipboard')
    }
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something."
        subtitle="Best way to reach me is email or LinkedIn."
      />

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 2.6 }}>
            <Stack spacing={1.4}>
              <ContactRow label="Email" value={profile.email} onCopy={(e) =>{e.preventDefault(); copy(profile.email)}} />
              <ContactRow label="Phone" value={profile.phone} onCopy={() => copy(profile.phone)} />
              <ContactLink label="LinkedIn" href={profile.linkedin} />
              <ContactLink label="GitHub" href={profile.github} />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2.6 }}>
            <Typography sx={{ fontWeight: 950 }}>Quick message template</Typography>
            <Typography sx={{ mt: 1.2, opacity: 0.82 }}>
              “Hey Arshdeep — I saw your work on ____. Want to chat about ____?”
            </Typography>
            <Button
              sx={{ mt: 2, textTransform: 'none', fontWeight: 900 }}
              variant="outlined"
              onClick={() => copy("Hey Arshdeep — I saw your work on ____. Want to chat about ____?")}
              startIcon={<ContentCopyIcon />}
            >
              Copy template
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

function ContactRow({ label, value, onCopy }) {
  return (
    <Paper sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
        <Typography sx={{ opacity: 0.82 }}>{value}</Typography>
      </div>
      <Button onClick={onCopy} variant="text" startIcon={<ContentCopyIcon />} sx={{ textTransform: 'none', fontWeight: 900 }}>
        Copy
      </Button>
    </Paper>
  )
}

function ContactLink({ label, href }) {
  return (
    <Paper sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
        <Typography sx={{ opacity: 0.82 }}>
          <Link href={href} target="_blank" rel="noreferrer">{href}</Link>
        </Typography>
      </div>
      <Button href={href} target="_blank" rel="noreferrer" variant="text" endIcon={<OpenInNewIcon />} sx={{ textTransform: 'none', fontWeight: 900 }}>
        Open
      </Button>
    </Paper>
  )
}
