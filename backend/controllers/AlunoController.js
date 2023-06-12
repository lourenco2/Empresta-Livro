const AlunoModel = require('../models/AlunoModel').AlunoModel;

class AlunoController{

    async listar(req, res){
        // #swagger.tags = ['Aluno']
        //select * from aluno;
        const resultado = await AlunoModel.find({});
        res.json(resultado);    
    }

    async buscarPorId(req, res){
        // #swagger.tags = ['Aluno']
        const id  = req.params.id;
        //select * from aluno where codigo = 2;
        const resultado = await AlunoModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        // #swagger.tags = ['Aluno']
        const aluno = req.body;
        const resultado = await AlunoModel.create(aluno);
        res.json(resultado);        
    }

    async atualizar(req, res){
        // #swagger.tags = ['Aluno']
        const id = req.params.id;
        const aluno = req.body;
        //update aluno set xxxx values xxxx
        const resultado = await AlunoModel.findOneAndUpdate({'_id': id}, aluno, {new: true});
        res.json(resultado);
    }

    async excluir(req, res){
        // #swagger.tags = ['Aluno']
        const id = req.params.id;
        await AlunoModel.findOneAndDelete({'_id': id});
        res.send("Aluno excluído!");
    }
}

module.exports = new AlunoController();