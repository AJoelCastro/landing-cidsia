
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FadeInUp } from '../../components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
            Nuestros Servicios
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            Soluciones tecnológicas a la medida de tu empresa
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minHeight: 220 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Desarrollo de Software
                </Typography>
                <Typography variant="body1">
                  Aplicaciones web, móviles y sistemas empresariales personalizados, usando tecnologías modernas y metodologías ágiles.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minHeight: 220 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Inteligencia Artificial
                </Typography>
                <Typography variant="body1">
                  Soluciones de IA, machine learning, análisis predictivo y automatización de procesos para potenciar tu negocio.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minHeight: 220 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Consultoría y Transformación Digital
                </Typography>
                <Typography variant="body1">
                  Asesoría estratégica, integración de sistemas y acompañamiento en la digitalización de tu empresa.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Box mt={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              ¿Por qué elegir CIDSIA?
            </Typography>
            <Typography variant="body1">
              Nos diferenciamos por nuestro enfoque personalizado, compromiso con la calidad y pasión por la innovación. Trabajamos de la mano con nuestros clientes para lograr resultados sobresalientes.
            </Typography>
          </Box>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
