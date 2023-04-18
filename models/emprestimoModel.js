const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var date = new Date()

const EmprestimoSchema = new Schema({
    codigo: Number,
    informacoesAluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aluno'
    },
    codigolivro: {
        type: Number,
        required: [true, "Informe o código do livro!"]
    },
    comprovanteEmissao: {
        type: Date,
        default: Date.now()
    },
    dataDevolucao: {
        type: Date,
        default: date.setDate(date.getDate() + 15)
    }
});

module.exports = mongoose.model('emprestimo', EmprestimoSchema);
