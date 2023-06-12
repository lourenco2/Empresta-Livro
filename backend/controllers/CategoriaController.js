const CategoriaModel = require('../models/CategoriaModel').CategoriaModel;

class CategoriaController {

  async listar(req, res){ 
    // #swagger.tags = ['Categoria']
    const resultado = await CategoriaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Categoria']
    const id = req.params.id;
    const categoria = await CategoriaModel.findOne({'_id': id});
    res.json(categoria);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Categoria']           
    const categoria = req.body;
    const resultado = await CategoriaModel.create(categoria);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Categoria']
    const id = req.params.id;
    const categoria = req.body;        
    const resultado = await CategoriaModel.findOneAndUpdate({'_id': id}, categoria, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Categoria']
    const id = req.params.id;
    await CategoriaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new CategoriaController();