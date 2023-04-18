const emprestimoModel = require('../models/emprestimoModel');

class EmprestimoController {

    async listar(req, res){  
        //select * from emprestimo;
        const resultado = await emprestimoModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from emprestimo where codigo = 2;
        const resultado = await emprestimoModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const emprestimo = req.body;

        //Gerador de novo código
        //select * from emprestimo order by codigo desc;
        const objeto = await emprestimoModel.findOne({}).sort({'codigo': -1});
        emprestimo.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into emprestimo (xxx) values (xxxx);
        const resultado = await emprestimoModel.create(emprestimo);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const emprestimo = req.body;
        //update emprestimo set xxxx values xxxx
        await emprestimoModel.findOneAndUpdate({'codigo': codigo}, emprestimo);
        res.send("Comprovante atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await emprestimoModel.findOneAndDelete({'codigo': codigo});
        res.send("Comprovante excluído!");
    }
}

module.exports = new EmprestimoController();