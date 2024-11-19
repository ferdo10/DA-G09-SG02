const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3001;


app.use(bodyParser.json());


const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'root';


const users = [
    { id: 1, name: 'Luis', email: 'luis@gmail.com' },
    { id: 2, name: 'Maria', email: 'maria@gmail.com' }
];



function authenticateToken(req, res, next) {
    const authHeader = req.headers['autorizacion'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); 

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
}

app.post('/login', (req, res) => {
    console.log(req.body); 
    const { name, email } = req.body;
    const user = users.find(u => u.name === name && u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    const accessToken = jwt.sign({ id: user.id, name: user.name, email: user.email }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
});


// Obtener informacion del usuario
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Informacion del perfil', user: req.user });
});

// Listar todos los usuarios
app.get('/users', authenticateToken, (req, res) => {
    res.json({ message: 'Lista de usuarios', users });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
