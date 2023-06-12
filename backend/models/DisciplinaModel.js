const mongoose = require('mongoose');

const Modalidade = {
  EXTENSAO: 'Extensão',
  PRESENCIAL: 'Presencial',
  DOL: 'Disciplina Online',
  OUTRAS: 'Outras'
}

const DisciplinaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  nome : { type: String, required : [true, "Nome é obrigatório!"]},
  ementa: { type: String, required : [true, "Ementa é obrigatória!"] },
  modalidade: { type: String, required : [true, "Modalidade é obrigatória!"]},
  competencias:  [{ type: Number, ref: 'competencia' }],
  bibliografia_basica: [{ type: Number, ref: 'bibliografia' }],
  bibliografia_complementar: [{ type: Number, ref: 'bibliografia' }],
  linhas:  [{ type: Number, ref: 'linha' }],
  metodos_avaliativos: String,
  anterior: { type: Number, ref: 'disciplina' },
  posterior: { type: Number, ref: 'disciplina' },
  cursos: [{ type: Number, ref: 'curso'}],
  professores: [ { type: Number, ref: 'professor'}],
  aulas: [{ type: Number, ref: 'aula'}],
  horasAula: Number,
  horasRelogio: Number,
  horasExtensao: Number,
  periodo: Number
}, { 
  versionKey: false 
});

DisciplinaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('disciplina', DisciplinaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  Modalidade: Modalidade,
  DisciplinaSchema: DisciplinaSchema,
  DisciplinaModel: mongoose.model('disciplina', DisciplinaSchema)
}