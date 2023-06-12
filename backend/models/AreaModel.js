const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]}
}, { 
  versionKey: false 
});

AreaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('area', AreaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  AreaSchema: AreaSchema,
  AreaModel: mongoose.model('area', AreaSchema)
}