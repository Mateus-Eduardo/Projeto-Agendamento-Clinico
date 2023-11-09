const db = require('../config/database');

// Função para remover caracteres não numéricos de uma string
function sanitizeString(value) {
  return value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
}

// Função para truncar uma string para um comprimento máximo
function truncateString(value, maxLength) {
  return value.substring(0, maxLength);
}

// Método responsável por criar um novo 'Paciente': POST
exports.createPaciente = async (req, res) => {
  try {
    const {
      nome_paciente,
      cpf_paciente,
      rg_paciente,
      cidade_paciente,
      telefone_paciente,
      celular_paciente
    } = req.body;

    // Ajuste para remover caracteres não numéricos e limitar o comprimento
    const cpfSanitized = sanitizeString(cpf_paciente);
    const rgSanitized = sanitizeString(rg_paciente);

    const { rows } = await db.query(
      "INSERT INTO paciente (nome_paciente, cpf_paciente, rg_paciente, cidade_paciente, telefone_paciente, celular_paciente) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        nome_paciente,
        truncateString(cpfSanitized, 11), // Limita o CPF a 11 caracteres
        truncateString(rgSanitized, 11),  // Limita o RG a 11 caracteres
        cidade_paciente,
        telefone_paciente,
        celular_paciente
      ]
    );

    res.status(201).send({
      message: 'Paciente adicionado com sucesso!',
      body: {
        paciente: {
          nome_paciente,
          cpf_paciente: truncateString(cpfSanitized, 11),
          rg_paciente: truncateString(rgSanitized, 11),
          cidade_paciente,
          telefone_paciente,
          celular_paciente
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({
      error: 'Erro interno do servidor ao criar um novo paciente.'
    });
  }
};

//=> Método responsável por listar todos os Pacientes: GET
exports.listAllPacientes = async (req, res) => {
    const response = await db.query('SELECT * FROM paciente ORDER BY nome_paciente ASC');
    res.status(200).send(response.rows);
  };