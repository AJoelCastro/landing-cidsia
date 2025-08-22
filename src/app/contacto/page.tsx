

import React from 'react';

import { Box, Typography, Grid, Paper } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionContacto from '../../components/SectionContacto';
import UbicacionMapa from '../../components/UbicacionMapa';


export default function Page() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp delay={0.2}>
          <Grid container spacing={6} justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={6}>
                <SectionContacto />
            </Grid>
          </Grid>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
