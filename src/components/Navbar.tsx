import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => (
  <AppBar position="static" sx={{ background: '#2C2C2C', color: '#FFD27A', boxShadow: 'none' }}>
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
      <Button color="inherit" href="#nosotros" sx={{ color: '#FFD27A', fontWeight: 600 }}>Nosotros</Button>
      <Button color="inherit" href="#servicios" sx={{ color: '#FFD27A', fontWeight: 600 }}>Servicios</Button>
      <Button color="inherit" href="#clientes" sx={{ color: '#FFD27A', fontWeight: 600 }}>Clientes</Button>
      <Button color="inherit" href="#contacto" sx={{ color: '#FFD27A', fontWeight: 600 }}>Contacto</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
