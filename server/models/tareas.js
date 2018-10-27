const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    textoTarea: {
        type: String,
        required: [true, 'El texto de la tarea es necesario']
    },
    realizada: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model('Tarea', tareaSchema)