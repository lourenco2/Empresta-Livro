const AlunoController = require('../controllers/AlunoController');
const express = require('express');

const router = express.Router();

router.get('/', AlunoController.listar);
router.get('/:id', AlunoController.buscarPorId);
router.post('/', AlunoController.salvar);
router.put('/:id', AlunoController.atualizar);
router.delete('/:id', AlunoController.excluir);

module.exports = router;