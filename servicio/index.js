const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.json({
    status: 'ok',
    from: 'servicio interno',
    mensaje: '¡Pong!'
  });
});

app.listen(PORT, () => {
  console.log(`Servicio interno escuchando en el puerto ${PORT}`);
});