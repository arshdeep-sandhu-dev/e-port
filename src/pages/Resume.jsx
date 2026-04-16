import React from 'react'
import { Container, Paper, Stack, Typography, Button } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import DownloadIcon from '@mui/icons-material/Download'

const RESUME_PATH = '/resume.pdf'

export default function Resume() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Resume"
        title="My resume."
        subtitle="Download or view inline below."
      />

      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontWeight: 600 }}>resume.pdf</Typography>
          <Button
            variant="contained"
            href={RESUME_PATH}
            download
            startIcon={<DownloadIcon />}
            size="small"
          >
            Download
          </Button>
        </Stack>

        <Paper sx={{ mt: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <iframe
            title="Resume"
            src={RESUME_PATH}
            style={{ width: '100%', height: '78vh', border: 0 }}
          />
        </Paper>
      </Paper>
    </Container>
  )
}
