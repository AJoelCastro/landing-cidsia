import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ background: '#2C2C2C', color: '#FFD27A', py: 3, textAlign: 'center', mt: 8 }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} CIDSIA - CENTRO DE INNOVACIÓN Y DESARROLLO DE SOFTWARE E INTELIGENCIA ARTIFICIAL
    </Typography>
  </Box>
);

export default Footer;
