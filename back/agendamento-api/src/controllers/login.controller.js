const express = require('express');
const db = require("../config/database");
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

exports.LogarFuncionario = async (req, res) => {
  try {
    // Consulta SQL para obter o usuário pelo e-mail
    const result = await db.query('SELECT * FROM funcionario WHERE email_funcionario = $1', [req.body.email_funcionario]);

      if (result.rows.length === 0) {
        return res.status(400).json({
          erro: true,
          mensagem: 'Usuário incorreto',
        });
      }
  
      const usuario = result.rows[0];  
      // Compare as senhas usando bcrypt
      const senhaCorreta = await bcrypt.compare(req.body.senha_funcionario, usuario.senha_funcionario);
  
      if (!senhaCorreta) {
        return res.status(400).json({
          erro: true,
          mensagem: 'Senha incorreta',
        });
      } else {
        return res.json({
          erro: false,
          mensagem: 'Login bem-sucedido',
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