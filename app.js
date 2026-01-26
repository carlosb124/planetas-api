const express = require('express');
const app = express();
const planetas = [
    { id: 1, nombre: 'Mercurio', orden: 1, tipo: 'Rocoso' },
    { id: 2, nombre: 'Venus', orden: 2, tipo: 'Rocoso' },
    { id: 3, nombre: 'Tierra', orden: 3, tipo: 'Rocoso' }
];
app.get('/planetas', (req, res) => res.status(200).json(planetas));
app.get('/', (req, res) => res.send('API del Sistema Solar'));
if (require.main === module) { app.listen(3000, () => console.log('API lista en puerto 3000')); }
module.exports = app;
