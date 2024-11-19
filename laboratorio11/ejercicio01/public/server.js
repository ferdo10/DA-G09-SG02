const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware 
app.use(bodyParser.json());


let users = [
    { id: 1, name: 'Luis Fernando', email: 'luiscarlos@gmail.com' },
    { id: 2, name: 'Carlos Teves', email: 'carlos@gmail.com' },
    { id: 3, name: 'Diego Maradona', email: 'eldiego@gmail.com' },
    { id: 4, name: 'Miguel Angel', email: 'miguelcarlos@gmail.com' },
];

// Endpoint GET: Obtener todos los usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint GET: Obtener un usuario por ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User  not found');
    }
});

// Endpoint POST: Crear un nuevo usuario
app.post('/users', (req, res) => {
    const newUser  = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    users.push(newUser );
    res.status(201).json(newUser );
});

// Endpoint PUT: Actualizar un usuario existente
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.json(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Endpoint DELETE: Eliminar un usuario
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.status(204).send(); 
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});