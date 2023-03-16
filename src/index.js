const express = require('express');
const morgan = require("morgan")
const cors = require('cors');
const authRouter = require('./routes/auth.js');
const adminRouter = require('./routes/admin.js');
const { mongoConnection, PORT } = require('./database/database.js');

const app = express();

app.use(morgan('dev'))

// Conexión a la base de datos
mongoConnection();

// Configuración de CORS
app.use(cors());

// Configuración del body parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/", (req, res) => {
  res.json({ "Biembenido": "Usuario" })
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/admin', adminRouter);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
