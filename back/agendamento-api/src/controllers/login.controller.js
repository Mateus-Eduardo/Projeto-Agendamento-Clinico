const express = require('express');
const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwtService = require ('../services/jwtService.js');
 

const app = express();

app.use(express.json());

exports.LogarFuncionario = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM funcionario WHERE email_funcionario = $1', [req.body.email_funcionario]);

    if (result.rows.length === 0) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Usuário incorreto',
      });
    }

    const usuario = result.rows[0];
    const senhaCorreta = await bcrypt.compare(req.body.senha_funcionario, usuario.senha_funcionario);

    if (!senhaCorreta) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Senha incorreta',
      });
    } else {
      // Crie um token JWT e retorne ao usuário
      const token = jwtService.criarToken(usuario.id); // Supondo que o ID do usuário seja 'id'
      return res.json({
        erro: false,
        mensagem: 'Login bem-sucedido',
        token,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: true,
      mensagem: 'Erro ao processar a requisição',
    });
  }
};
