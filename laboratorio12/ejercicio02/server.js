const express = require('express');
const mongoose = require('mongoose');
const alumnosRoutes = require('./routes/alumnos');

const app = express();


app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ucsm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));


app.use('/api/alumnos', alumnosRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
