const livroController = require('../controllers/livroController');
const express = require('express');

const router = express.Router();

router.get('/', livroController.listar);
router.get('/:codigo', livroController.buscarPorCodigo);
router.post('/', livroController.salvar);
router.put('/:codigo', livroController.atualizar);
router.delete('/:codigo', livroController.excluir);

module.exports = router;