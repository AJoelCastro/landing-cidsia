import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const phone = '+51969742589';
const message = encodeURIComponent('¡Hola! Me gustaría saber más sobre CIDSIA.');
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

const FloatingWhatsAppButton: React.FC = () => (
  <Fab
    color="primary"
    aria-label="WhatsApp"
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 2000,
      backgroundColor: '#25D366',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#128C7E',
      },
    }}
  >
    <WhatsAppIcon />
  </Fab>
);

export default FloatingWhatsAppButton;
