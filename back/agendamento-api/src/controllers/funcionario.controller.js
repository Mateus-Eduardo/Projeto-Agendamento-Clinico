const pool = require('../config/database');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//POST
exports.CadastrarFuncionario = async (req, res) => {
  try {
    // Verifique se os campos necessários estão presentes no corpo da requisição
    if (!req.body.nome_funcionario || !req.body.email_funcionario || !req.body.senha_funcionario) {
      return res.status(400).json({ error: 'Dados incompletos na requisição' });
    }

    // Faça o hash da senha usando bcrypt
    const hashedPassword = await bcrypt.hash(req.body.senha_funcionario, 6);

    // Insira o novo funcionário na tabela usando o pool do PostgreSQL
    const result = await pool.query(
      'INSERT INTO funcionario (nome_funcionario, email_funcionario, senha_funcionario) VALUES ($1, $2, $3) RETURNING *',
      [req.body.nome_funcionario, req.body.email_funcionario, hashedPassword]
    );

    // Envie a mensagem de sucesso
    res.status(200).json({ success: true, message: 'Funcionário cadastrado com sucesso', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: true, message: 'Erro ao processar a requisição' });
  }
};

//GET
exports.ListarFuncionario = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM funcionario');
      return res.json({
        erro: false,
        mensagem: "Lista de Funcionários",
        funcionarios: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        erro: true,
        mensagem: 'Erro ao processar a requisição',
      });
    }
  };