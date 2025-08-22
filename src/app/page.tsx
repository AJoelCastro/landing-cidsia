'use client';

import HeroCarousel from '../components/HeroCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Navbar />
      <Box sx={{ mt: { xs: 10, md: 14 }, mb: 8 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom align="center">
            ¡Bienvenido a CIDSIA!
          </Typography>
          <Typography variant="h5" color="text.secondary" align="center" mb={4}>
            Impulsamos la innovación y el crecimiento de tu empresa con tecnología de vanguardia.
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
                <Image src="/img/innovacion.svg" alt="Innovación" width={80} height={80} style={{ marginBottom: 16 }} />
                <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
                  Innovación Continua
                </Typography>
                <Typography variant="body1">
                  Creamos soluciones únicas y disruptivas para que tu empresa siempre esté un paso adelante.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
                <Image src="/img/alianzas.svg" alt="Alianzas" width={80} height={80} style={{ marginBottom: 16 }} />
                <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
                  Alianzas Estratégicas
                </Typography>
                <Typography variant="body1">
                  Trabajamos con partners líderes y clientes de diversos sectores para lograr resultados extraordinarios.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.95)' }}>
                <Image src="/img/impacto.svg" alt="Impacto" width={80} height={80} style={{ marginBottom: 16 }} />
                <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
                  Impacto Real
                </Typography>
                <Typography variant="body1">
                  Medimos nuestro éxito por el crecimiento y la satisfacción de nuestros clientes.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Box textAlign="center" mt={6}>
            <Typography variant="h5" color="primary" fontWeight={700} mb={2}>
              ¿Listo para transformar tu empresa?
            </Typography>
            <Button href="/contacto" variant="contained" size="large" sx={{ px: 6, py: 2, fontWeight: 700, fontSize: 20, borderRadius: 3 }}>
              Contáctanos
            </Button>
          </Box>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
