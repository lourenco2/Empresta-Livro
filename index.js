require("./db/mongo");
const express = require("express");
const srv = express();
srv.use(express.json());

//Roteamento das rotas de conteúdo
const livroRouter = require('./routes/livroRouter');
srv.use('/livro', livroRouter);

const alunoRouter = require('./routes/alunoRouter');
srv.use('/aluno', alunoRouter);

const emprestimoRouter = require('./routes/emprestimoRouter');
srv.use('/emprestimo', emprestimoRouter);

srv.listen(3000, function(){
    console.log('Empresta livro rodando em http://localhost:3000');
});