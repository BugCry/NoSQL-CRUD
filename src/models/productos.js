const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productos = new Schema({
    Nombre: String,
    Descripcion: String,
    Valor: Number,
    Existencia: Number,
    status: {
        type: Boolean,
        default: true
    }
});

//                          coleccion , variable?
module.exports = mongoose.model('productos',productos);