import express from 'express';
import { getData } from './getData.mjs';
import { calcularEspaciosDisponibles } from './calcularEspaciosDisponibles.mjs';

const app = express();
const port = 3000;

app.get('/espacios-disponibles/:dia', async (req, res) => {
  const { dia } = req.params;

  const diasAceptados = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  if (!diasAceptados.includes(dia.toLowerCase())) {
    return res.status(400).json({ error: 'Día no válido, los dias de atención son Lunes, Martes, Miércoles, Jueves y Viernes.' });
  }

  const url = 'https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json';
  const citasAsignadas = await getData(url);

  const totalEspaciosDisponibles = calcularEspaciosDisponibles(citasAsignadas, dia.toLowerCase());

  res.json({ totalEspaciosDisponibles });
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});