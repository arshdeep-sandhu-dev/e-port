import React from 'react'
import { Container, Paper, Stack, Typography, Button } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import DownloadIcon from '@mui/icons-material/Download'

const PAPER_PATH = '/hpmlPaper.pdf'

export default function PaperPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Paper"
        title="HPML Paper"
        subtitle="Download or view inline below."
      />

      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontWeight: 600 }}>hpmlPaper.pdf</Typography>
          <Button
            variant="contained"
            href={PAPER_PATH}
            download
            startIcon={<DownloadIcon />}
            size="small"
          >
            Download
          </Button>
        </Stack>

        <Paper sx={{ mt: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <iframe
            title="HPML Paper"
            src={PAPER_PATH}
            style={{ width: '100%', height: '78vh', border: 0 }}
          />
        </Paper>
      </Paper>
    </Container>
  )
}
