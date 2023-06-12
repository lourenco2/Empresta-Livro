const DisciplinaModel = require('../models/DisciplinaModel').DisciplinaModel;

class DisciplinaController {

  async listar(req, res){ 
    // #swagger.tags = ['Disciplinas']
    const resultado = await DisciplinaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){ 
    // #swagger.tags = ['Disciplinas']
    const id = req.params.id;
    const disciplina = await DisciplinaModel.findOne({'_id': id});
    res.json(disciplina);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Disciplinas']            
    const disciplina = req.body;
    const resultado = await DisciplinaModel.create(disciplina);
    res.json(resultado);
  }

  async atualizar(req, res){ 
    // #swagger.tags = ['Disciplinas']
    const id = req.params.id;
    const disciplina = req.body;        
    const resultado = await DisciplinaModel.findOneAndUpdate({'_id': id}, disciplina, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){ 
    // #swagger.tags = ['Disciplinas']
    const id = req.params.id;
    await DisciplinaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new DisciplinaController();