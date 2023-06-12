const EmprestimoModel = require('../models/EmprestimoModel').EmprestimoModel;

class EmprestimoController {

    async listar(req, res){  
        // #swagger.tags = ['Emprestimo']
        const resultado = await EmprestimoModel.find({});
        res.json(resultado);    
    }

    async buscarPorId(req, res){
        // #swagger.tags = ['Emprestimo']
        const id  = req.params.id;
        //select * from emprestimo where codigo = 2;
        const resultado = await EmprestimoModel.findOne({'_id': id});
        res.json(resultado);
    }

    async salvar(req, res){
        // #swagger.tags = ['Emprestimo']
        const emprestimo = req.body;
        //insert into emprestimo (xxx) values (xxxx);
        const resultado = await EmprestimoModel.create(emprestimo);
        res.json(resultado);        
    }

    async atualizar(req, res){
        // #swagger.tags = ['Emprestimo']
        const id = req.params.id;
        const emprestimo = req.body;
        //update emprestimo set xxxx values xxxx
        const resultado = await EmprestimoModel.findOneAndUpdate({'_id': id}, emprestimo, {new: true});
        res.json(resultado);
    }

    async excluir(req, res){
        // #swagger.tags = ['Emprestimo']
        const id = req.params.id;
        await EmprestimoModel.findOneAndDelete({'_id': id});
        res.send("Comprovante excluído!");
    }
}

module.exports = new EmprestimoController();