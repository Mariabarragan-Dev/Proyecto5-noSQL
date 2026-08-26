require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notFound');
const movieRoutes = require('./src/routes/movie.routes');
const cinemaRoutes = require('./src/routes/cinema.routes');

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares base
app.use(cors());
app.use(express.json());

//conexión a la base de datos
connectDB();

//ruta de bienvenida (para el arranque)
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'API de Movies y Cinemas funcionando ' });
});

//rutas principales
app.use('/movies', movieRoutes);
app.use('/cinemas', cinemaRoutes);

//middleware de ruta no encontrada
app.use(notFound);

//middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});