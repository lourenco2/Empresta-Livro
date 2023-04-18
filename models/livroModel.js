const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LivroSchema = new Schema({

    codigo: Number,
    Titulo: {
        type: String,
        required: [true, "Titulo é obrigatório!"]
    },
    categoria: {
        type: String,
        required: [true, "Categoria é obrigatória!"]
    },
    dataCriacao:{
        type: Date,
        default: Date.now()
    },
    sinopse : {
        type: String,
        required: [true, "Sinopse é uma informação obrigatória!"]
    },
    autor: {
        type: String,
        required: [true, "Autor é obrigatório!"]
    },
    quantidade: {
        type: Number,
        required: [true, "Requisito obrigatório!"]
    }
});

module.exports = mongoose.model('livro', LivroSchema);
