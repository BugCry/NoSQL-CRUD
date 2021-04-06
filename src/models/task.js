const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tarea = new Schema({
    Titulo: String,
    Descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});

//                          coleccion , variable?
module.exports = mongoose.model('tarea',tarea);