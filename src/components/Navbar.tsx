"use client";
import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navLinks = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Soluciones', href: '/soluciones' },
  // { label: 'Blog', href: '/blog' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? '#282120' : 'transparent',
        color: '#FFD27A',
        boxShadow: scrolled ? '0 2px 16px #0004' : 'none',
        transition: 'background 0.4s, box-shadow 0.4s',
        backdropFilter: scrolled ? 'blur(0px)' : 'blur(2px)',
      }}
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref legacyBehavior>
            <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Image src="/logo-horizontal.svg" alt="CIDSIA Logo" width={120} height={48} style={{ marginRight: 16 }} />
            </a>
          </Link>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { background: '#2C2C2C', color: '#FFD27A', width: 220 } }}
            >
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.href} disablePadding>
                    <ListItemButton
                      component={Link}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        color: '#FFD27A',
                        fontWeight: 600,
                        fontSize: 18,
                        textAlign: 'right',
                        px: 3,
                        py: 2,
                        '&:hover': { color: '#FFB347', background: 'rgba(255,210,122,0.08)' },
                      }}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding sx={{ mt: 2 }}>
                  <ListItemButton
                    component={Link}
                    href="/contacto"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      background: 'linear-gradient(90deg, #FFD27A 0%, #FFB347 100%)',
                      color: '#1A1A1A',
                      fontWeight: 700,
                      borderRadius: 2,
                      mx: 2,
                      py: 1.5,
                      justifyContent: 'center',
                      gap: 1,
                      '&:hover': { background: 'linear-gradient(90deg, #FFB347 0%, #FFD27A 100%)', color: '#fff' },
                    }}
                  >
                    Contacto <ArrowForwardIcon sx={{ ml: 1 }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <nav style={{ display: 'flex', gap: 40, flexGrow: 1, justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <a
                    style={{
                      color: '#282120',
                      fontWeight: 500,
                      fontSize: 20,
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '4px 0',
                      transition: 'color 0.2s',
                      fontFamily: 'var(--font-geist-sans)',
                    }}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>
            <Link href="/contacto" passHref legacyBehavior>
              <a
                style={{
                  marginLeft: 32,
                  background: 'linear-gradient(90deg, #FFD27A 0%, #FFB347 100%)',
                  color: '#1A1A1A',
                  fontWeight: 700,
                  fontSize: 18,
                  borderRadius: 12,
                  padding: '12px 36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: '0 2px 8px #0001',
                  textDecoration: 'none',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #FFB347 0%, #FFD27A 100%)'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #FFD27A 0%, #FFB347 100%)'; e.currentTarget.style.color = '#1A1A1A'; }}
              >
                Contacto <ArrowForwardIcon sx={{ ml: 1 }} />
              </a>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
