const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/testando';
const db = mongoose.connect(url);

mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!'));
mongoose.connection.on('error', (erro) => console.log('Erro: ' + erro));

module.exports = db;