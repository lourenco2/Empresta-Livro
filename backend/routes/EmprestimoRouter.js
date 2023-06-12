const EmprestimoController = require('../controllers/EmprestimoController');
const express = require('express');

const router = express.Router();

router.get('/', EmprestimoController.listar);
router.get('/:id', EmprestimoController.buscarPorId);
router.post('/', EmprestimoController.salvar);
router.put('/:id', EmprestimoController.atualizar);
router.delete('/:id', EmprestimoController.excluir);

module.exports = router;