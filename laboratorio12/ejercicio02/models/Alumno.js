const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    DNI: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true },
    Edad: { type: Number, required: true },
    Distrito: { type: String, required: true },
    Celular: { type: String, required: true }
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
