const alunoController = require('../controllers/alunoController');
const express = require('express');

const router = express.Router();

router.get('/', alunoController.listar);
router.get('/:codigo', alunoController.buscarPorCodigo);
router.post('/', alunoController.salvar);
router.put('/:codigo', alunoController.atualizar);
router.delete('/:codigo', alunoController.excluir);

module.exports = router;