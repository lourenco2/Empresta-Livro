const mongoose = require('mongoose');

const LinhaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]},
  areas:  [{ type: Number, ref: 'area' }],
  disciplinas:  [{ type: Number, ref: 'disciplina' }],
  cursos:  [{ type: Number, ref: 'curso' }]
}, { 
  versionKey: false 
});

LinhaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('linha', LinhaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  LinhaSchema: LinhaSchema,
  LinhaModel: mongoose.model('linha', LinhaSchema)
}