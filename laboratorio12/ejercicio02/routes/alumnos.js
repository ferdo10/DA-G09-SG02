const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');


router.put('/:dni', async (req, res) => {
    const { dni } = req.params;
    const { Nombre, Edad, Distrito, Celular } = req.body;

    try {
        const alumnoActualizado = await Alumno.findOneAndUpdate(
            { DNI: dni },
            { Nombre, Edad, Distrito, Celular },
            { new: true } 
        );

        if (!alumnoActualizado) {
            return res.status(404).json({ mensaje: 'Alumno no encontrado' });
        }

        res.json(alumnoActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el alumno', error });
    }
});


router.delete('/:dni', async (req, res) => {
    const { dni } = req.params;

    try {
        const alumnoEliminado = await Alumno.findOneAndDelete({ DNI: dni });

        if (!alumnoEliminado) {
            return res.status(404).json({ mensaje: 'Alumno no encontrado' });
        }

        res.json({ mensaje: 'Alumno eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el alumno', error });
    }
});

module.exports = router;
