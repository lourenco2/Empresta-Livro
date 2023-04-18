const emprestimoController = require('../controllers/emprestimoController');
const express = require('express');

const router = express.Router();

router.get('/', emprestimoController.listar);
router.get('/:codigo', emprestimoController.buscarPorCodigo);
router.post('/', emprestimoController.salvar);
router.put('/:codigo', emprestimoController.atualizar);
router.delete('/:codigo', emprestimoController.excluir);

module.exports = router;