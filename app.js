const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pepelucho@10',
    database: 'restaurante'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Ruta para formulario de reservas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta enviar la reserva
app.post('/reservar', (req, res) => {
    const { nombre, fecha, hora, personas } = req.body;
    const sql = 'INSERT INTO reservas (nombre, fecha, hora, personas) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre, fecha, hora, personas], (err, result) => {
        if (err) throw err;
        res.send('Reserva realizada con éxito!');
    });
});

// ruta visualize las reservas
app.get('/reservas', (req, res) => {
    const sql = 'SELECT * FROM reservas';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('reservas', { reservas: results });
    });
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});