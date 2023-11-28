const pool = require('../config/database');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const funcionarioController = require('../controllers/funcionario.controller');



// Rota para cadastrar um novo funcionário
router.post('/funcionarios/', funcionarioController.CadastrarFuncionario);
// Rota para listar um novo funcionário
router.get('/listar', funcionarioController.ListarFuncionario);



module.exports = router;
