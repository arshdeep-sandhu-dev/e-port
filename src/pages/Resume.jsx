import React from 'react'
import { Container, Paper, Stack, Typography, Button } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import DownloadIcon from '@mui/icons-material/Download'

export default function Resume() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <SectionHeader
        eyebrow="Resume"
        title="PDF resume"
        subtitle="Drop your resume PDF into /public/resume.pdf and it will show here."
      />

      <Paper sx={{ p: 2.6 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontWeight: 900 }}>resume.pdf</Typography>
          <Button
            variant="contained"
            href="/resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{ textTransform: 'none', fontWeight: 900 }}
          >
            Download
          </Button>
        </Stack>

        <Paper sx={{ mt: 2.2, overflow: 'hidden' }}>
          <iframe
            title="Resume"
            src="/resume.pdf"
            style={{ width: '100%', height: '78vh', border: 0 }}
          />
        </Paper>
      </Paper>
    </Container>
  )
}
