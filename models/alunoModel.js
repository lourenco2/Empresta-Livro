const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlunoSchema = new Schema({
    codigo: Number,
    nome: {
        type: String,
        required: [true, "Nome é uma informação obrigatória!"]
    },
    documento: {
        type: Number,
        required: [true, "Documento é nescessario"]
    },
    telefone: {
        type: Number,
        required: [true, "Contato obrigatório!"]
    },
    endereço: {
        type: String,
        required: [true, "Endereço é obrigatório"]
    },
    dataCriacao:{
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('aluno', AlunoSchema);
