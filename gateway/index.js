const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const URL_SERVICIO = 'http://servicio-interno:3000/ping';

app.get('/', async (req, res) => {
  try {
    const respuesta = await axios.get(URL_SERVICIO, { timeout: 5000 });
    res.json({
      status: 'ok',
      gateway: 'api-gateway',
      respuesta_del_servicio: respuesta.data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      detalle: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});