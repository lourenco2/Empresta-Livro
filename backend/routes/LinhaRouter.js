const LinhaController = require('../controllers/LinhaController');
const express = require('express');

const Router = express.Router();

Router.get('/', LinhaController.listar);
Router.get('/:id', LinhaController.buscarPorId);
Router.post('/', LinhaController.salvar);
Router.put('/:id', LinhaController.atualizar);
Router.delete('/:id', LinhaController.excluir);

module.exports = Router;
