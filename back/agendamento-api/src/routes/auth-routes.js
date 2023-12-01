const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const jwtService = require ('../services/jwtService.js');

router.post('/login', loginController.LogarFuncionario);

// Rota protegida que usa o middleware de autenticação
router.get('/rota-protegida', authMiddleware, (req, res) => {
  res.json({ mensagem: 'Esta rota é protegida' });
});

module.exports = router;
