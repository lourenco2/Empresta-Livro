const DisciplinaController = require('../controllers/DisciplinaController');
const express = require('express');

const Router = express.Router();

Router.get('/', DisciplinaController.listar);
Router.get('/:id', DisciplinaController.buscarPorId);
Router.post('/', DisciplinaController.salvar);
Router.put('/:id', DisciplinaController.atualizar);
Router.delete('/:id', DisciplinaController.excluir);

module.exports = Router;
