const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log( 'Database online' );
    } catch (error) {
        console.log(error)
        throw  new Error('error a la hora de inicializar base de datos');
    }
}
module.exports = {
    dbConnection
};