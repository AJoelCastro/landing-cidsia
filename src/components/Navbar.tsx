"use client";
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
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
        background: scrolled ? '#2C2C2C' : 'transparent',
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
              <Image src="/logo-horizontal.png" alt="CIDSIA Logo" width={120} height={48} style={{ marginRight: 16 }} />
              <Typography variant="h6" sx={{ color: '#FFD27A', fontWeight: 700 }}>
                CIDSIA
              </Typography>
            </a>
          </Link>
        </Box>
        <nav style={{ display: 'flex', gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#FFD27A',
                fontWeight: 600,
                fontSize: 18,
                textDecoration: 'none',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#FFB347')}
              onMouseOut={e => (e.currentTarget.style.color = '#FFD27A')}
            >
              {link.label}
              <span style={{
                display: 'block',
                height: 2,
                width: '100%',
                background: '#FFD27A',
                position: 'absolute',
                left: 0,
                bottom: 0,
                transform: 'scaleX(0)',
                transition: 'transform 0.3s',
              }} className="nav-underline"></span>
            </a>
          ))}
        </nav>
        <style>{`
          nav a:hover .nav-underline {
            transform: scaleX(1);
            background: #FFB347;
          }
        `}</style>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
