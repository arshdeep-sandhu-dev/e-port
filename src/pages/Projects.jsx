import React from 'react'
import { Box, Chip, Container, Grid, Paper, Stack, Typography, Button, Link } from '@mui/material'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/profile'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { FadeUp } from '../components/Motion'

export default function Projects() {
  const [openCard, setOpenCard] = React.useState(null) // stores the title (or index) of the opened image card

  const toggleCard = (key) => {
    setOpenCard((prev) => (prev === key ? null : key))
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <SectionHeader
        eyebrow="Projects"
        title="Stuff I’ve built (and shipped)."
        subtitle="Each project has a clear problem, a tech stack, and the part I owned."
      />

      <Grid container spacing={2.5}>
        {projects.map((p, idx) => {
          const key = p.title // unique enough here
          const showImage = openCard === key

          return (
            <Grid item xs={12} md={6} key={key} sx={{ display: 'flex' }}>
              <FadeUp delay={0.03 * idx}>
                <Paper
                  onClick={() => toggleCard(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCard(key)}
                  sx={{
                    p: 2.6,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  {showImage ? (
                    // IMAGE STATE (replaces the whole card content)
                    <Box
                      sx={{
                        flex: 1,
                        minHeight: 260,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src="/favicon.svg"
                        alt="Project preview"
                        sx={{
                          width: '100%',
                          height: '100%',
                          maxHeight: 360,
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  ) : (
                    // NORMAL STATE (project description)
                    <>
                      <Typography sx={{ fontWeight: 950, fontSize: 18 }}>{p.title}</Typography>
                      <Typography sx={{ mt: 0.7, opacity: 0.75, fontSize: 14 }}>{p.dates}</Typography>

                      <Typography sx={{ mt: 1.4, opacity: 0.86 }}>
                        {p.summary}
                      </Typography>

                      <Stack direction="row" spacing={1} sx={{ mt: 1.6, flexWrap: 'wrap' }}>
                        {p.stack.map((s) => (
                          <Chip key={s} label={s} variant="outlined" sx={{ mb: 1 }} />
                        ))}
                      </Stack>

                      <Box component="ul" sx={{ mt: 1.4, mb: 0, pl: 2.2, opacity: 0.9 }}>
                        {p.bullets.map((b, i) => (
                          <li key={i}><Typography sx={{ opacity: 0.86 }}>{b}</Typography></li>
                        ))}
                      </Box>

                      <Box
                        sx={{ mt: 'auto', pt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}
                        onClick={(e) => e.stopPropagation()} // <-- prevents the card click toggle when clicking links/buttons
                      >
                        {p.links.map((l) => (
                          <Button
                            key={l.href}
                            component={Link}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            variant="outlined"
                            endIcon={<OpenInNewIcon />}
                            sx={{ textTransform: 'none', fontWeight: 800 }}
                          >
                            {l.label}
                          </Button>
                        ))}

                        <Button
                          variant="outlined"
                          sx={{ textTransform: 'none', fontWeight: 800 }}
                          onClick={() => toggleCard(key)}
                        >
                          See Demo
                        </Button>
                      </Box>
                    </>
                  )}
                </Paper>
              </FadeUp>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
