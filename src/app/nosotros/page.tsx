

import { Box, Typography, Grid } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';


export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main" align="center">
            Sobre CIDSIA
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Image src="/img/oficina1.jpg" alt="Oficina CIDSIA" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image src="/img/equipo1.jpg" alt="Equipo CIDSIA" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image src="/img/innovacion1.jpg" alt="Innovación" width={400} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Grid>
          </Grid>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
