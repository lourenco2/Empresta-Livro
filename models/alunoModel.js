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
        required: [true, "Documento é obrigatório"]
    },
    telefone: {
        type: Number,
        required: [true, "Contato obrigatório!"]
    },
    endereco: {
        type: String,
        required: [true, "Endereço é obrigatório"]
    }   
});

module.exports = mongoose.model('aluno', AlunoSchema);
