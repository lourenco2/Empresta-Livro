const mongoose = require('mongoose');


const AlunoSchema = new mongoose.Schema({
    _id: {type: Number, required: true, default: -1},
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


AlunoSchema.pre('save', async function(next){
    if (this._id < 1){
      const Model = mongoose.model('aluno', AlunoSchema);
      const objMaxId = await Model.findOne().sort({'_id': -1});
      this._id = objMaxId == null ? 1 : objMaxId._id + 1;
    }
    next();
  });


module.exports = {
    AlunoSchema: AlunoSchema,
    AlunoModel: mongoose.model('aluno', AlunoSchema)
} 
