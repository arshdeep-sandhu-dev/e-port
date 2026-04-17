import React from 'react'
import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { FadeUp } from '../components/Motion'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const headlineStats = [
  { value: '$600K', label: 'Annual ops cost reduction' },
  { value: '50%', label: 'Cost cut vs. legacy DB2' },
  { value: '13M+', label: 'Members impacted' },
  { value: '90%+', label: 'Backend test coverage' }
]

const stack = [
  'Java', 'Spring Boot', 'Spring Batch', 'Oracle',
  'DB2 (legacy)', 'REST APIs', 'JUnit', 'Mockito', 'GitLab CI/CD'
]

export default function CaseStudyUSAA() {
  return (
    <Container maxWidth="md" sx={{ pt: 7, pb: 8 }}>
      <FadeUp>
        <Button
          component={NavLink}
          to="/experience"
          startIcon={<ArrowBackIcon />}
          size="small"
          sx={{
            mb: 3,
            color: 'text.secondary',
            '&:hover': { color: 'text.primary', backgroundColor: 'transparent' }
          }}
        >
          Back to Experience
        </Button>
      </FadeUp>

      <SectionHeader
        eyebrow="Case Study · USAA"
        title="Migrating a $1.2M/yr loss aggregation pipeline from DB2 to Oracle."
        subtitle="A batch processing system aggregating enterprise-wide loss data for General Ledger reporting across 13M+ members."
      />

      <FadeUp delay={0.05}>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {headlineStats.map((s) => (
            <Grid item xs={6} md={3} key={s.label}>
              <Box sx={{ py: 2, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
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
      </FadeUp>

      <FadeUp delay={0.1}>
        <Section eyebrow="01" title="Problem">
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            The enterprise-wide loss aggregation pipeline ran on a legacy DB2 system that was
            costing roughly <strong style={{ color: '#fafafa' }}>$1.2M per year</strong> in licensing
            and operational overhead. It processed loss data feeding General Ledger reporting — a
            compliance-critical workload that could not tolerate downtime or data loss during the transition.
          </Typography>
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            The batch jobs had grown over time into a tangle of stored procedures and custom scripts,
            making changes slow and error-prone. The APIs sitting in front of the data were tightly
            coupled to DB2-specific SQL, so any migration had to happen across the stack in lockstep.
          </Typography>
          <TodoNote>
            Add a sentence or two here on the specific pain points you ran into day-to-day
            (e.g. long release cycles, DB2 licensing renewal triggering the project, compliance deadline).
          </TodoNote>
        </Section>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Section eyebrow="02" title="Approach">
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            The migration was designed around three principles: <strong style={{ color: '#fafafa' }}>incremental cutover</strong>,
            <strong style={{ color: '#fafafa' }}> behavior-preserving refactor</strong>, and
            <strong style={{ color: '#fafafa' }}> test coverage before changes</strong>.
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', '& li': { mb: 1 } }}>
            <li>
              Re-platformed the batch tier onto <strong style={{ color: '#fafafa' }}>Spring Batch</strong>,
              decomposing monolithic jobs into readers, processors, and writers with restart/skip semantics.
            </li>
            <li>
              Rewrote RESTful APIs on <strong style={{ color: '#fafafa' }}>Spring Boot</strong>,
              swapping DB2-specific SQL for Oracle-compatible queries and introducing a thin data-access
              layer so future engine swaps stay localized.
            </li>
            <li>
              Drove backend test coverage to <strong style={{ color: '#fafafa' }}>90%+</strong> with JUnit
              and Mockito before cutting over, so regressions would surface in CI rather than production.
            </li>
            <li>
              Ran Oracle and DB2 in parallel during the cutover window, reconciling outputs job-by-job
              until confidence was high enough to decommission the legacy path.
            </li>
          </Box>
          <TodoNote>
            If there was a specific architectural tradeoff you're proud of (chunking strategy,
            how you handled the GL reconciliation, how you broke up the rollout) — drop it here.
            One or two paragraphs is plenty.
          </TodoNote>

          <Typography sx={{ mt: 3, mb: 1.5, fontWeight: 600, fontSize: '0.85rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Stack
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
            {stack.map(s => <Chip key={s} label={s} variant="outlined" size="small" />)}
          </Stack>
        </Section>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Section eyebrow="03" title="Result">
          <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', '& li': { mb: 1 } }}>
            <li>
              Cut annual operating cost from <strong style={{ color: '#fafafa' }}>$1.2M to $600K</strong> —
              a ~50% reduction driven by licensing, infrastructure, and maintenance savings.
            </li>
            <li>
              Batch processing efficiency improved
              {' '}<span style={{ opacity: 0.6 }}>(TODO: add the specific runtime delta — e.g. "30% faster end-to-end")</span>.
            </li>
            <li>
              Zero reconciliation deltas vs. the legacy DB2 path during parallel run.
            </li>
            <li>
              Release visibility improved downstream via the CI/CD monitoring dashboard work
              (from the 2025 internship), feeding back into this team's deploy confidence.
            </li>
          </Box>
        </Section>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Section eyebrow="04" title="Lessons">
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            <strong style={{ color: '#fafafa' }}>Tests bought the migration.</strong> Pushing coverage
            above 90% before touching production paths was the single decision that made parallel
            cutover feasible — every reconciliation delta had a failing test waiting for it.
          </Typography>
          <TodoNote>
            Add 1–2 more lessons in your own voice here. Good candidates: something you'd do
            differently, a surprising finding about DB2→Oracle type mappings, a stakeholder
            management note, or what you learned about Spring Batch at scale.
          </TodoNote>
        </Section>
      </FadeUp>

      <FadeUp delay={0.15}>
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            Want to talk through the details?
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            <Button component={NavLink} to="/contact" variant="contained">Get in touch</Button>
            <Button component={NavLink} to="/experience" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.15)', color: 'text.primary' }}>
              More experience
            </Button>
          </Stack>
        </Box>
      </FadeUp>
    </Container>
  )
}

function Section({ eyebrow, title, children }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Stack direction="row" spacing={2} alignItems="baseline" sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'primary.main',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          {title}
        </Typography>
      </Stack>
      {children}
    </Box>
  )
}

function TodoNote({ children }) {
  return (
    <Paper
      sx={{
        mt: 2,
        p: 2,
        backgroundColor: 'rgba(250, 204, 21, 0.04)',
        border: '1px dashed rgba(250, 204, 21, 0.25)'
      }}
    >
      <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgb(250, 204, 21)', letterSpacing: '0.1em', mb: 0.5 }}>
        TODO · FILL IN
      </Typography>
      <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.6 }}>
        {children}
      </Typography>
    </Paper>
  )
}
