import React from 'react'
import { Box, Button, Chip, Container, Grid, Link as MuiLink, Paper, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { FadeUp } from '../components/Motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import BoltIcon from '@mui/icons-material/Bolt'
import LanguageIcon from '@mui/icons-material/Language'
import PaymentIcon from '@mui/icons-material/Payment'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SmsIcon from '@mui/icons-material/Sms'
import EmailIcon from '@mui/icons-material/Email'
import { profile } from '../data/profile'

const gmailComposeUrl = (to, subject) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}`
const smsUrl = (phone, body) =>
  `sms:${phone.replace(/[^+\d]/g, '')}?&body=${encodeURIComponent(body)}`

const services = [
  {
    icon: <LanguageIcon sx={{ fontSize: 22 }} />,
    title: 'Custom websites',
    body: 'Modern, responsive sites built on Next.js and TypeScript. Fast, mobile-first, and yours to keep.'
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 22 }} />,
    title: 'Payments & integrations',
    body: 'Online ordering, booking flows, payment processors (Clover, Stripe), and the integrations your business actually needs.'
  },
  {
    icon: <BoltIcon sx={{ fontSize: 22 }} />,
    title: 'Hosting & performance',
    body: 'Deployed on Vercel with global CDN, SSL, and Lighthouse-tuned performance out of the box.'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 22 }} />,
    title: 'Ongoing support',
    body: 'Updates, content changes, and real-person maintenance — not a template you get abandoned with.'
  }
]

const process = [
  { step: '01', title: 'Call', body: 'A 20-minute conversation to understand what your business needs and what it doesn\'t.' },
  { step: '02', title: 'Design', body: 'A draft site you can click through before we commit to production.' },
  { step: '03', title: 'Build', body: 'I build, test, and integrate payments or booking — typically 1–3 weeks.' },
  { step: '04', title: 'Launch', body: 'Deployed under your domain with handoff docs and a support plan.' }
]

const caseStudyStats = [
  { value: '3,000+', label: 'Monthly users' },
  { value: '7.5×', label: 'Platform cost reduction' },
  { value: '$10K/mo', label: 'New catering revenue' },
  { value: '12', label: 'Modular React components' }
]

export default function BuildDeep() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7, pb: 8 }}>
      <SectionHeader
        eyebrow="Build · Deep"
        title="Production-grade websites for small businesses."
        subtitle="I build fast, reliable, custom-coded sites — not template patchwork. Currently taking on a limited number of new clients."
      />

      <FadeUp delay={0.05}>
        <Stack direction="row" spacing={1.5} sx={{ mb: 6, flexWrap: 'wrap', rowGap: 1 }}>
          <Button
            component="a"
            href={gmailComposeUrl(profile.email, 'Website project inquiry')}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            startIcon={<EmailIcon sx={{ fontSize: 18 }} />}
            sx={{ px: 3, py: 1 }}
          >
            Start a project
          </Button>
          <Button
            component="a"
            href={smsUrl(profile.phone, 'Hi Arsh — saw your Build Deep page and want to chat about a site.')}
            variant="outlined"
            startIcon={<SmsIcon sx={{ fontSize: 18 }} />}
            sx={{
              px: 3,
              py: 1,
              borderColor: 'rgba(255,255,255,0.15)',
              color: 'text.primary',
              '&:hover': { borderColor: 'rgba(255,255,255,0.3)' }
            }}
          >
            I prefer text
          </Button>
          <Button
            component="a"
            href="https://tandoorpalacerestaurant.com"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
            sx={{
              px: 3,
              py: 1,
              borderColor: 'rgba(255,255,255,0.15)',
              color: 'text.primary',
              '&:hover': { borderColor: 'rgba(255,255,255,0.3)' }
            }}
          >
            See live example
          </Button>
        </Stack>
      </FadeUp>

      {/* Services */}
      <Box sx={{ mb: 8 }}>
        <FadeUp>
          <Typography
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'text.secondary',
              mb: 2.5
            }}
          >
            What I build
          </Typography>
        </FadeUp>
        <Grid container spacing={2.5}>
          {services.map((s, idx) => (
            <Grid item xs={12} sm={6} key={s.title}>
              <FadeUp delay={0.06 * idx}>
                <Paper sx={{ p: 3, height: '100%', '&:hover': { borderColor: 'rgba(255,255,255,0.15)' } }}>
                  <Box sx={{ color: 'primary.main', mb: 1.5 }}>{s.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{s.title}</Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {s.body}
                  </Typography>
                </Paper>
              </FadeUp>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured case study: Tandoor Palace */}
      <Box sx={{ mb: 8 }}>
        <FadeUp>
          <Typography
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'text.secondary',
              mb: 2.5
            }}
          >
            Featured work
          </Typography>
        </FadeUp>

        <FadeUp delay={0.05}>
          <Paper sx={{ p: { xs: 3, md: 4 }, '&:hover': { borderColor: 'rgba(255,255,255,0.12)' } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1.5} sx={{ mb: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.2rem' }}>Tandoor Palace Restaurant</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mt: 0.5 }}>
                  Full production web app · Mar 2026 – Apr 2026
                </Typography>
              </Box>
              <Button
                component="a"
                href="https://tandoorpalacerestaurant.com"
                target="_blank"
                rel="noreferrer"
                size="small"
                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                sx={{ color: 'primary.main', fontWeight: 600 }}
              >
                tandoorpalacerestaurant.com
              </Button>
            </Stack>

            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, mb: 2.5 }}>
              A production web application serving 3,000+ monthly users with responsive UI design, integrated
              catering inquiry flow, and migrated payment systems. Built with Next.js, TypeScript, and Tailwind CSS.
            </Typography>

            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Clover', 'Vercel'].map(t => (
                <Chip key={t} label={t} variant="outlined" size="small" />
              ))}
            </Stack>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              {caseStudyStats.map((s) => (
                <Grid item xs={6} md={3} key={s.label}>
                  <Box sx={{ py: 1.5, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.4rem', md: '1.75rem' },
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums'
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.4 }}>
                      {s.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 1,
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: 'rgba(0,0,0,0.2)'
              }}
            >
              <Box
                component="iframe"
                title="Tandoor Palace Restaurant — live preview"
                src="https://tandoorpalacerestaurant.com"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: { xs: 420, md: 600 },
                  border: 0,
                  display: 'block'
                }}
              />
            </Box>
            <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.75rem', fontStyle: 'italic' }}>
              Live site embedded above. If it doesn't load, click the link above to open it directly.
            </Typography>
          </Paper>
        </FadeUp>
      </Box>

      {/* Process */}
      <Box sx={{ mb: 8 }}>
        <FadeUp>
          <Typography
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'text.secondary',
              mb: 2.5
            }}
          >
            How it works
          </Typography>
        </FadeUp>
        <Grid container spacing={2.5}>
          {process.map((p, idx) => (
            <Grid item xs={12} sm={6} md={3} key={p.step}>
              <FadeUp delay={0.06 * idx}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      color: 'primary.main',
                      fontVariantNumeric: 'tabular-nums',
                      mb: 1
                    }}
                  >
                    {p.step}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>{p.title}</Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {p.body}
                  </Typography>
                </Box>
              </FadeUp>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Good fit */}
      <FadeUp>
        <Paper sx={{ p: { xs: 3, md: 4 }, mb: 6 }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Good fit if you're…</Typography>
          <Grid container spacing={1.5}>
            {[
              'A local business without a modern site (or stuck on a template platform)',
              'A restaurant needing online ordering, menus, or catering inquiries',
              'A service provider wanting a real presence + booking flow',
              'Tired of paying per-feature fees to Wix / Squarespace / etc.'
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main', mt: 0.25 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>{item}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </FadeUp>

      {/* CTA */}
      <FadeUp>
        <Box sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.15rem' }}>
            Ready to build something?
          </Typography>
          <Typography sx={{ mt: 1, mb: 2.5, color: 'text.secondary' }}>
            Tell me about your business in a sentence or two — I'll reply within a day with next steps.
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
            <Button
              component="a"
              href={gmailComposeUrl(profile.email, 'Website project inquiry')}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              startIcon={<EmailIcon sx={{ fontSize: 18 }} />}
            >
              Email me
            </Button>
            <Button
              component="a"
              href={smsUrl(profile.phone, 'Hi Arsh — saw your Build Deep page and want to chat about a site.')}
              variant="outlined"
              startIcon={<SmsIcon sx={{ fontSize: 18 }} />}
              sx={{ borderColor: 'rgba(255,255,255,0.15)', color: 'text.primary' }}
            >
              I prefer text
            </Button>
          </Stack>
        </Box>
      </FadeUp>
    </Container>
  )
}
