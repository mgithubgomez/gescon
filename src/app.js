const express = require('express');

const cocheController = require('./controller/cocheController');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API concesionario funcionando');
});

app.get('/coches', cocheController.obtenerCoches);
app.post('/coches', cocheController.crearCoche);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});