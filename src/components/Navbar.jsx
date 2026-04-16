import React, { useState } from 'react'
import {
  AppBar, Box, Button, Container, Drawer, IconButton,
  List, ListItem, ListItemButton, ListItemText, Toolbar, Typography
} from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Resume', path: '/resume' },
  { label: 'Research Papers', path: '/paper' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(9, 9, 11, 0.8)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5, minHeight: 64 }}>
            <Typography
              component={NavLink}
              to="/"
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                color: 'inherit',
                mr: 4
              }}
            >
              Arshdeep Sandhu
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flex: 1 }}>
              {pages.map(p => (
                <Button
                  key={p.path}
                  component={NavLink}
                  to={p.path}
                  sx={{
                    fontWeight: 500,
                    color: location.pathname === p.path ? 'primary.main' : 'text.secondary',
                    '&:hover': { color: 'text.primary', backgroundColor: 'transparent' },
                    minWidth: 0,
                    px: 1.5
                  }}
                >
                  {p.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: '#09090b',
            borderLeft: '1px solid rgba(255,255,255,0.06)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map(p => (
            <ListItem key={p.path} disablePadding>
              <ListItemButton
                component={NavLink}
                to={p.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  py: 1.5,
                  px: 3,
                  color: location.pathname === p.path ? 'primary.main' : 'text.secondary'
                }}
              >
                <ListItemText primary={p.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
