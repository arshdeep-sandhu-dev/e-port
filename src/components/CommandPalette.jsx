import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Box, Dialog, InputBase, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, Chip, Stack
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import FolderIcon from '@mui/icons-material/Folder'
import DescriptionIcon from '@mui/icons-material/Description'
import ArticleIcon from '@mui/icons-material/Article'
import MailIcon from '@mui/icons-material/Mail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadIcon from '@mui/icons-material/Download'
import SearchIcon from '@mui/icons-material/Search'
import BoltIcon from '@mui/icons-material/Bolt'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import LanguageIcon from '@mui/icons-material/Language'
import { profile } from '../data/profile'

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform)

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()

  const commands = useMemo(() => [
    { id: 'home', label: 'Home', group: 'Navigate', icon: <HomeIcon fontSize="small" />, action: () => navigate('/') },
    { id: 'about', label: 'About', group: 'Navigate', icon: <PersonIcon fontSize="small" />, action: () => navigate('/about') },
    { id: 'projects', label: 'Projects', group: 'Navigate', icon: <FolderIcon fontSize="small" />, action: () => navigate('/projects') },
    { id: 'experience', label: 'Experience', group: 'Navigate', icon: <WorkIcon fontSize="small" />, action: () => navigate('/experience') },
    { id: 'resume', label: 'Resume', group: 'Navigate', icon: <DescriptionIcon fontSize="small" />, action: () => navigate('/resume') },
    { id: 'paper', label: 'Research Papers', group: 'Navigate', icon: <ArticleIcon fontSize="small" />, action: () => navigate('/paper') },
    { id: 'contact', label: 'Contact', group: 'Navigate', icon: <MailIcon fontSize="small" />, action: () => navigate('/contact') },
    { id: 'now', label: "Now — what I'm working on", group: 'Navigate', icon: <BoltIcon fontSize="small" />, action: () => navigate('/now') },
    { id: 'case-study', label: 'Case study: DB2 → Oracle migration', group: 'Navigate', icon: <AutoStoriesIcon fontSize="small" />, action: () => navigate('/case-study/usaa') },
    { id: 'builddeep', label: 'Build Deep — website services', group: 'Navigate', icon: <LanguageIcon fontSize="small" />, action: () => navigate('/builddeep') },
    { id: 'download-resume', label: 'Download Resume (PDF)', group: 'Actions', icon: <DownloadIcon fontSize="small" />, action: () => { window.open('/resume.pdf', '_blank') } },
    { id: 'email', label: `Email ${profile.email}`, group: 'Actions', icon: <MailIcon fontSize="small" />, action: () => { window.location.href = `mailto:${profile.email}` } },
    { id: 'github', label: 'Open GitHub', group: 'External', icon: <GitHubIcon fontSize="small" />, action: () => { window.open(profile.github, '_blank', 'noopener,noreferrer') } },
    { id: 'linkedin', label: 'Open LinkedIn', group: 'External', icon: <LinkedInIcon fontSize="small" />, action: () => { window.open(profile.linkedin, '_blank', 'noopener,noreferrer') } },
  ], [navigate])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(c => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q))
  }, [query, commands])

  useEffect(() => {
    const handler = (e) => {
      const mod = isMac ? e.metaKey : e.ctrlKey
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`)
    if (el) el.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  const runCommand = (cmd) => {
    setOpen(false)
    cmd.action()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const cmd = filtered[activeIndex]
      if (cmd) runCommand(cmd)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  let lastGroup = null

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(20, 20, 23, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 2,
          overflow: 'hidden',
          mt: 8,
          alignSelf: 'flex-start'
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <SearchIcon sx={{ color: 'text.secondary', mr: 1.5, fontSize: 20 }} />
        <InputBase
          inputRef={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command or search…"
          fullWidth
          sx={{ color: 'text.primary', fontSize: '0.95rem' }}
          inputProps={{ 'aria-label': 'Command palette search' }}
        />
      </Box>

      <Box ref={listRef} sx={{ maxHeight: 380, overflowY: 'auto', py: 0.5 }}>
        {filtered.length === 0 ? (
          <Typography sx={{ p: 3, color: 'text.secondary', fontSize: '0.875rem', textAlign: 'center' }}>
            No results for "{query}"
          </Typography>
        ) : (
          <List sx={{ py: 0 }}>
            {filtered.map((cmd, idx) => {
              const showHeader = cmd.group !== lastGroup
              lastGroup = cmd.group
              return (
                <React.Fragment key={cmd.id}>
                  {showHeader && (
                    <Typography
                      sx={{
                        px: 2,
                        pt: idx === 0 ? 1 : 1.5,
                        pb: 0.5,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.secondary'
                      }}
                    >
                      {cmd.group}
                    </Typography>
                  )}
                  <ListItemButton
                    data-index={idx}
                    selected={idx === activeIndex}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => runCommand(cmd)}
                    sx={{
                      mx: 1,
                      my: 0.25,
                      borderRadius: 1,
                      py: 1,
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(59,130,246,0.12)',
                        '&:hover': { backgroundColor: 'rgba(59,130,246,0.16)' }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, color: idx === activeIndex ? 'primary.main' : 'text.secondary' }}>
                      {cmd.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={cmd.label}
                      primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                    />
                  </ListItemButton>
                </React.Fragment>
              )
            })}
          </List>
        )}
      </Box>

      <Box sx={{ px: 2, py: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
          <Hint keys={['↑', '↓']} label="Navigate" />
          <Hint keys={['↵']} label="Select" />
          <Hint keys={['esc']} label="Close" />
        </Stack>
      </Box>
    </Dialog>
  )
}

function Hint({ keys, label }) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {keys.map(k => (
        <Chip
          key={k}
          label={k}
          size="small"
          sx={{
            height: 18,
            fontSize: '0.65rem',
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            '& .MuiChip-label': { px: 0.75 }
          }}
        />
      ))}
      <Typography component="span" sx={{ fontSize: '0.7rem', ml: 0.25 }}>{label}</Typography>
    </Stack>
  )
}
