import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';

const SectionNosotros: React.FC = () => (
  <Box id="nosotros" sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: 'background.default' }}>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="center">
      <Avatar
        src="/icono-cidsia.png" // Reemplaza por tu icono real
        alt="Icono CIDSIA"
        sx={{ width: 120, height: 120, mb: { xs: 2, md: 0 } }}
      />
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
          ¿Quiénes somos?
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ maxWidth: 600 }}>
          CIDSIA (CENTRO DE INNOVACIÓN Y DESARROLLO DE SOFTWARE E INTELIGENCIA ARTIFICIAL) es una empresa peruana dedicada a crear soluciones tecnológicas innovadoras, desarrollando software a medida y aplicando inteligencia artificial para potenciar el crecimiento de nuestros clientes.
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default SectionNosotros;
