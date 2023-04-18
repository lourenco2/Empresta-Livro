const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/empresta_livro';

//const url = 'mongodb+srv://admin:senha@meubanco.opfdf.mongodb.net/?retryWrites=true&w=majority';

const db = mongoose.connect(url);

mongoose.connection.on('connected', ()=> console.log("Conectado ao mongodb com sucesso!"));
mongoose.connection.on('error', (err) => console.log("Erro" + err));

module.exports = db;