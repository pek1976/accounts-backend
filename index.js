require('dotenv').config();

const express = require('express');
const cors = require('cors');

// 
const { dbConnection } = require('./database/config'); // estamos importando el modulo dbConnection (puesto que se esta exportando)

// Crear el servidor de express 
const app = express();

// configurar CORS
app.use(cors());

// Base de Datos 
dbConnection();

// console.log(process.env); // permite listar todas las variables de entorno que estan corriendo en node


// Rutas 
app.get('/', (req, res) => {

    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto 3000');
})