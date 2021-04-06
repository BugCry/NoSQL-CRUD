const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrito = new Schema({
    IdProd: String,
    Nombre: String,
    Cantidad: Number,
    Total: Number,
    Estado: {
        type: Boolean,
        default: true
    }
});

//                          coleccion , variable?
module.exports = mongoose.model('carrito',carrito);