const mongoose = require('mongoose');


// Conexión a la base de datos
const mongoConnection = () => mongoose.connect('mongodb://localhost:3001/loginChat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = { mongoConnection };