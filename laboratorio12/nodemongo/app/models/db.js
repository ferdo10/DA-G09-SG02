const mongoose = require('mongoose');
// URL de conexión a la base de datos
const MONGODB_URI = 'mongodb://localhost:27017/node-crud'; // Cambia esto por tu URL de MongoDB
// Conexión a la base de datos
const connectDB = async () => {
 try {
 await mongoose.connect(MONGODB_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
 console.log('Conexión exitosa a MongoDB');
 } catch (error) {
 console.error('Error al conectar a MongoDB:', error);
 process.exit(1); // Finaliza el proceso en caso de error
 }
};
module.exports = connectDB;