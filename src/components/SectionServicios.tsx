import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';

const servicios = [
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: 'Desarrollo de Software',
    desc: 'Aplicaciones web, móviles y sistemas a medida para tu empresa.',
  },
  {
    icon: <SmartToyIcon fontSize="large" color="primary" />,
    title: 'Inteligencia Artificial',
    desc: 'Soluciones de IA, machine learning y automatización de procesos.',
  },
  {
    icon: <CloudIcon fontSize="large" color="primary" />,
    title: 'Cloud & DevOps',
    desc: 'Infraestructura en la nube, integración y despliegue continuo.',
  },
];

const SectionServicios: React.FC = () => (
  <Box id="servicios" sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: 'background.paper' }}>
    <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom textAlign="center">
      Nuestros Servicios
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {servicios.map((serv) => (
  <Grid item xs={12} md={4} key={serv.title}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 4, minHeight: 220 }}>
            {serv.icon}
            <Typography variant="h6" fontWeight={600} mt={2} mb={1} color="text.primary">
              {serv.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {serv.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SectionServicios;
