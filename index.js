const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('¡Servidor Express corriendo en el puerto 8000!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 