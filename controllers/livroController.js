const livroModel = require('../models/livroModel');

class LivroController{

    async listar(req, res){
        //select * from livro;
        const resultado = await livroModel.find({});
        res.json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from livro where codigo = 2;
        const resultado = await livroModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const livro = req.body;

        //Gerador de novo código
        const objeto = await livroModel.findOne({}).sort({'codigo': -1});
        livro.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into livro (xxx) values (xxxx);
        const resultado = await livroModel.create(livro);
        res.json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const livro = req.body;
        //update livro set xxxx values xxxx
        await livroModel.findOneAndUpdate({'codigo': codigo}, livro);
        res.send("Livro atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await livroModel.findOneAndDelete({'codigo': codigo});
        res.send("Livro excluído!");
    }
}

module.exports = new LivroController();