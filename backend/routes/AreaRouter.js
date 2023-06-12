const AreaController = require('../controllers/AreaController');
const express = require('express');

const Router = express.Router();

Router.get('/', AreaController.listar);
Router.get('/:id', AreaController.buscarPorId);
Router.post('/', AreaController.salvar);
Router.put('/:id', AreaController.atualizar);
Router.delete('/:id', AreaController.excluir);

module.exports = Router;
