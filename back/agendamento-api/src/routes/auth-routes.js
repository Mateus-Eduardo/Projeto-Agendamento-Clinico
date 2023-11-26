const pool = require('../config/database');
const express = require('express');
const bcrypt = require('bcrypt');
const loginController = require('../controllers/login.controller');
const router = express.Router();

router.post('/Login', loginController.LogarFuncionario);

module.exports = router;
