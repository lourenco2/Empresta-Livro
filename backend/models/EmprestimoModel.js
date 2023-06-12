const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var date = new Date()

const EmprestimoSchema = new mongoose.Schema({
    _id: {type: Number, required: true, default: -1},
    id_aluno: [{
        type: Number,
        ref: 'aluno',
        required: true
      }],
      id_livro: [{
        type: Number,
        ref: 'livro',
        required: true
      }],
    codigolivro: {
        type: Number,
        required: [false, "Informe o código do livro!"]
    },
    comprovanteEmissao: {
        type: Date,
        default: Date.now()
    },
    dataDevolucao: {
        type: Date,
        default: date.setDate(date.getDate() + 15)
    },
    status_emprestimo: {
        type: String,
        enum: ['pendente', 'devolvido', 'atrasado'],
        default: 'pendente'
      }
});

EmprestimoSchema.pre('save', async function(next){
    if (this._id < 1){
      const Model = mongoose.model('emprestimo', EmprestimoSchema);
      const objMaxId = await Model.findOne().sort({'_id': -1});
      this._id = objMaxId == null ? 1 : objMaxId._id + 1;
    }
    next();
  });


module.exports = {
    EmprestimoSchema: EmprestimoSchema,
    EmprestimoModel: mongoose.model('emprestimo', EmprestimoSchema)
} 
