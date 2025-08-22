

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FadeInUp } from '../../components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function SolucionesPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
            Soluciones y Casos de Éxito
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            Impacto real en empresas de diversos sectores
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minHeight: 180 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Sistema de Gestión para Clínicas
                </Typography>
                <Typography variant="body1">
                  Desarrollamos una plataforma integral para la gestión de pacientes, citas y facturación, mejorando la eficiencia y experiencia del paciente en clínicas privadas.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, minHeight: 180 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  IA para Predicción de Demanda
                </Typography>
                <Typography variant="body1">
                  Implementamos modelos de machine learning para prever la demanda de productos en empresas retail, optimizando inventarios y reduciendo pérdidas.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Box mt={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              Clientes que confían en nosotros
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente1.png" alt="Cliente 1" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente2.png" alt="Cliente 2" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente3.png" alt="Cliente 3" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente4.png" alt="Cliente 4" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente5.png" alt="Cliente 5" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
              <Grid item xs={6} md={2}>
                <Box sx={{ width: '100%', maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/img/cliente6.png" alt="Cliente 6" width={100} height={60} style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: 60 }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
