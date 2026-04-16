import React from 'react'
import { Box, Typography } from '@mui/material'
import { FadeUp } from './Motion'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <FadeUp>
      <Box sx={{ mb: 5 }}>
        {eyebrow && (
          <Typography
            sx={{
              display: 'inline-block',
              px: 1.5,
              py: 0.4,
              borderRadius: 1,
              border: '1px solid rgba(59,130,246,0.2)',
              background: 'rgba(59,130,246,0.08)',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h2" sx={{ mt: 1.5 }}>{title}</Typography>
        {subtitle && (
          <Typography sx={{ mt: 1, color: 'text.secondary', maxWidth: 600 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </FadeUp>
  )
}
