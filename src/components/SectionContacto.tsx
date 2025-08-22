'use client';
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import UbicacionMapa from './UbicacionMapa';

const SectionContacto: React.FC = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <Box id="contacto" sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: 'background.paper' }} className="fade-in-up">
      <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom textAlign="center">
        Contáctanos
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
        ¿Tienes un proyecto en mente o necesitas asesoría tecnológica? Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.<br />
        También puedes escribirnos a <a href="mailto:contacto@cidsia.com" style={{ color: '#FFB347', textDecoration: 'underline' }}>contacto@cidsia.com</a> o llamarnos al <b>+51 969 742 589</b>.
      </Typography>
      <Stack component="form" onSubmit={handleSubmit} spacing={3} maxWidth={500} mx="auto">
        <TextField
          label="Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          multiline
          minRows={4}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Enviar
        </Button>
        {enviado && <Alert severity="success">¡Mensaje enviado! Nos pondremos en contacto pronto.</Alert>}
      </Stack>
      <Box mt={6}>
        <Typography variant="h5" fontWeight={600} color="primary.main" textAlign="center" mb={2} fontFamily="var(--font-playfair)">
          Nuestra Ubicación
        </Typography>
        {/* Cambia los valores de lat, lng y zoom según tu ubicación */}
        <UbicacionMapa lat={-12.0464} lng={-77.0428} zoom={16} height="350px" />
      </Box>
    </Box>
  );
};

export default SectionContacto;
