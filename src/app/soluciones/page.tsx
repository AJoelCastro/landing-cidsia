


import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
export default function SolucionesPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main" align="center">
            Soluciones
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Image src="/img/solucion1.jpg" alt="Solución 1" width={500} height={350} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src="/img/solucion2.jpg" alt="Solución 2" width={500} height={350} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
          </Grid>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Box mt={6}>
            <Typography variant="h6" color="primary" gutterBottom align="center">
              Nuestros clientes
            </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente1.png" alt="Cliente 1" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente2.png" alt="Cliente 2" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente3.png" alt="Cliente 3" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente4.png" alt="Cliente 4" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente5.png" alt="Cliente 5" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Image src="/img/cliente6.png" alt="Cliente 6" width={120} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
              </Grid>
            </Grid>
          </Box>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  )
}
