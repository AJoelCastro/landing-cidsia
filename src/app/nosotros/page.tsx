
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { FadeInUp } from '@/components/animations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: { xs: 12, md: 14 }, mb: 6 }}>
        <FadeInUp>
          <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
            Sobre CIDSIA
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            Centro de Innovación y Desarrollo de Software e Inteligencia Artificial
          </Typography>
          <Typography variant="body1" mb={4}>
            Somos un equipo multidisciplinario apasionado por la tecnología, la innovación y el desarrollo de soluciones digitales a medida. En CIDSIA, combinamos experiencia en software, inteligencia artificial y consultoría para impulsar la transformación digital de empresas en Perú y Latinoamérica.
          </Typography>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, background: 'rgba(255,255,255,0.95)' }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Nuestra Misión
                </Typography>
                <Typography variant="body1">
                  Brindar soluciones tecnológicas innovadoras y de alta calidad que potencien el crecimiento y la competitividad de nuestros clientes.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, background: 'rgba(255,255,255,0.95)' }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Nuestra Visión
                </Typography>
                <Typography variant="body1">
                  Ser referentes en innovación tecnológica y desarrollo de software inteligente en la región, generando impacto positivo en la sociedad.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Box mt={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              Nuestro Equipo
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                  <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} src="/img/avatar1.png" />
                  <Typography fontWeight={600}>Ing. Andrea Salazar</Typography>
                  <Typography variant="body2" color="text.secondary">CEO & Fundadora</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                  <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} src="/img/avatar2.png" />
                  <Typography fontWeight={600}>Dr. Luis Mendoza</Typography>
                  <Typography variant="body2" color="text.secondary">CTO - IA & Data Science</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                  <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} src="/img/avatar3.png" />
                  <Typography fontWeight={600}>Lic. Carla Ríos</Typography>
                  <Typography variant="body2" color="text.secondary">Gerente de Proyectos</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                  <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} src="/img/avatar4.png" />
                  <Typography fontWeight={600}>Ing. Marco Torres</Typography>
                  <Typography variant="body2" color="text.secondary">Desarrollador Senior</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </FadeInUp>
      </Box>
      <Footer />
    </>
  );
}
