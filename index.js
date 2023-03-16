const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan")
const cors = require('cors');
const authRouter = require('./routes/auth.js');
const adminRouter = require('./routes/admin.js');

const app = express();

app.use(morgan('dev'))

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:3001/loginChat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuración de CORS
app.use(cors());

// Configuración del body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>{
    res.json({"Biembenido": "Usuario"})
})

app.use('/auth', authRouter);
app.use('/admin', adminRouter);


// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
