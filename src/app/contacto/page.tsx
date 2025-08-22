

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';


export default function Page() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main" align="center">
            Contáctanos
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Image src="/img/contacto1.jpg" alt="Contacto CIDSIA" width={500} height={350} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src="/img/contacto2.jpg" alt="Equipo en contacto" width={500} height={350} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
          </Grid>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
