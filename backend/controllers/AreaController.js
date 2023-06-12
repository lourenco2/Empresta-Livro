const AreaModel = require('../models/AreaModel').AreaModel;

class AreaController {

  async listar(req, res){ 
    // #swagger.tags = ['Áreas']
    const resultado = await AreaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Áreas']
    const id = req.params.id;
    const area = await AreaModel.findOne({'_id': id});
    res.json(area);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Áreas']           
    const area = req.body;
    const resultado = await AreaModel.create(area);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Áreas']
    const id = req.params.id;
    const area = req.body;        
    const resultado = await AreaModel.findOneAndUpdate({'_id': id}, area, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Áreas']
    const id = req.params.id;
    await AreaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new AreaController();