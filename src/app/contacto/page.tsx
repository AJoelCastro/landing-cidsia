
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SectionContacto from '../../components/SectionContacto';
import UbicacionMapa from '../../components/UbicacionMapa';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
            Contáctanos
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            ¿Listo para transformar tu empresa con tecnología?
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <SectionContacto />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Nuestra Ubicación
                </Typography>
                <UbicacionMapa height="260" />
                <Typography variant="body2" color="text.secondary" mt={2}>
                  Calle Ficticia 123, Miraflores, Lima, Perú<br />
                  contacto@cidsia.com | +51 999 888 777
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
