const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createFuncionarioTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS funcionario (
      id_funcionario SERIAL PRIMARY KEY,
      nome_funcionario VARCHAR(255) NOT NULL,
      email_funcionario VARCHAR(255) NOT NULL UNIQUE,
      senha_funcionario VARCHAR(255) NOT NULL
    )
  `;
  await pool.query(query);
};

const addFuncionario = async (nome, email, senha) => {
  const query = `
    INSERT INTO funcionario (nome_funcionario, email_funcionario, senha_funcionario)
    VALUES ($1, $2, $3)
  `;
  await pool.query(query, [nome, email, senha]);
};

const getFuncionarioByEmail = async (email) => {
  const query = 'SELECT * FROM funcionario WHERE email_funcionario = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = {
  createFuncionarioTable,
  addFuncionario,
  getFuncionarioByEmail,
};
