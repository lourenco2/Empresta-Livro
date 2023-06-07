const alunoModel = require('../models/alunoModel');

class AlunoController{

    async listar(req, res){
        //select * from aluno;
        const resultado = await alunoModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from aluno where codigo = 2;
        const resultado = await alunoModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const aluno = req.body;

        //Gerador de novo código
        const objeto = await alunoModel.findOne({}).sort({'codigo': -1});
        aluno.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into aluno (xxx) values (xxxx);
        const resultado = await alunoModel.create(aluno);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const aluno = req.body;
        //update aluno set xxxx values xxxx
        await alunoModel.findOneAndUpdate({'codigo': codigo}, aluno);
        res.send("Aluno atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await alunoModel.findOneAndDelete({'codigo': codigo});
        res.send("Aluno excluído!");
    }
}

module.exports = new AlunoController();