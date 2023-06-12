const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  categoria : { type: String, required : [true, "Categoria é obrigatória!"]}
}, { 
  versionKey: false 
});

CategoriaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('categoria', CategoriaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  CategoriaSchema: CategoriaSchema,
  CategoriaModel: mongoose.model('categoria', CategoriaSchema)
}