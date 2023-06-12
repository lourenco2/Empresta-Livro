const CategoriaController = require('../controllers/CategoriaController');
const express = require('express');

const router = express.Router();

router.get('/', CategoriaController.listar);
router.get('/:id', CategoriaController.buscarPorId);
router.post('/', CategoriaController.salvar);
router.put('/:id', CategoriaController.atualizar);
router.delete('/:id', CategoriaController.excluir);

module.exports = router;