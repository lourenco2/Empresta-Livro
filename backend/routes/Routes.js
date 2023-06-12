const express = require("express");
const Router = express.Router();

//Ativa a autenticação e autorização
//const Auth = require('../auth/Auth');
//Router.use(Auth.autorizar);


const AreaRouter = require("./AreaRouter");
Router.use("/areas", AreaRouter);

const LinhaRouter = require("./LinhaRouter");
Router.use("/linhas", LinhaRouter);

const DisciplinaRouter = require("./DisciplinaRouter");
Router.use("/disciplinas", DisciplinaRouter);


// NOSSO

const AlunoRouter = require("./AlunoRouter");
Router.use("/aluno", AlunoRouter);

const EmprestimoRouter = require("./EmprestimoRouter");
Router.use("/emprestimo", EmprestimoRouter);

const LivroRouter = require("./LivroRouter");
Router.use("/livro", LivroRouter);

const CategoriaRouter = require("./CategoriaRouter");
Router.use("/categoria", CategoriaRouter);

module.exports = Router;
