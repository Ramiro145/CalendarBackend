

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();
//crear el servidor de express

const app = express();

//Base de datos
dbConnection();


//CORS
app.use(cors())


//Directorio publico
app.use(express.static('public'))

//lectura y parseo del body

app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

//CRUD:eventos


//escuchar peticiones

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})