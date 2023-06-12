const LinhaModel = require('../models/LinhaModel').LinhaModel;

class LinhaController {

  async listar(req, res){ 
    // #swagger.tags = ['Linhas']
    const resultado = await LinhaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Linhas']
    const id = req.params.id;
    const linha = await LinhaModel.findOne({'_id': id});
    res.json(linha);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Linhas']           
    const linha = req.body;
    const resultado = await LinhaModel.create(linha);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Linhas']
    const id = req.params.id;
    const linha = req.body;        
    const resultado = await LinhaModel.findOneAndUpdate({'_id': id}, linha, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Linhas']
    const id = req.params.id;
    await LinhaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new LinhaController();