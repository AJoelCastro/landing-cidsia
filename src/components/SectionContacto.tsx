import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

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
    <Box id="contacto" sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom textAlign="center">
        Contáctanos
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
    </Box>
  );
};

export default SectionContacto;
