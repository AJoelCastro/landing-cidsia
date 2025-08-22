import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

const clientes = [
  { nombre: 'Empresa Alpha', logo: '/cliente1.png' },
  { nombre: 'Beta Solutions', logo: '/cliente2.png' },
  { nombre: 'Gamma Tech', logo: '/cliente3.png' },
];

const SectionClientes: React.FC = () => (
  <Box id="clientes" sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: 'background.default' }}>
    <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom textAlign="center">
      Nuestros Clientes
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {clientes.map((cli) => (
  <Grid item xs={12} md={4} key={cli.nombre}>
          <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
            <Avatar src={cli.logo} alt={cli.nombre} sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }} />
            <Typography variant="h6" fontWeight={600} color="text.primary">
              {cli.nombre}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SectionClientes;
