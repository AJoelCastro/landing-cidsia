

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';


export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main" align="center">
            Nuestros Servicios
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Image src="/img/servicio1.jpg" alt="Servicio 1" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image src="/img/servicio2.jpg" alt="Servicio 2" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image src="/img/servicio3.jpg" alt="Servicio 3" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
          </Grid>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
