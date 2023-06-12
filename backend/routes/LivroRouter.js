const LivroController = require('../controllers/LivroController');
const express = require('express');

const router = express.Router();

router.get('/', LivroController.listar);
router.get('/:id', LivroController.buscarPorId);
router.post('/', LivroController.salvar);
router.put('/:id', LivroController.atualizar);
router.delete('/:id', LivroController.excluir);

module.exports = router;