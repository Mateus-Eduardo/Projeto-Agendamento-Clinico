const db = require("../config/database");

exports.createMedico = async (req, res) => {
    try {
      const {
        nome_especialidade,
        nome_medico,
        crm_medico,
        cpf_medico,
        cidade_medico,
        telefone_medico,
        celular_medico,
        email_medico        
      } = req.body;
  
      // Ajuste para remover caracteres não numéricos e limitar o comprimento
      // const cpfSanitized = sanitizeString(cpf_medico);
  
        const telefoneMedico = Array.isArray(telefone_medico) ? null : telefone_medico;
  
      const { rows } = await db.query(
        "INSERT INTO medico (nome_especialidade, nome_medico, crm_medico, cpf_medico, cidade_medico, telefone_medico, celular_medico, email_medico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        [
            nome_especialidade,
            nome_medico,
            crm_medico,
            cpf_medico,
            cidade_medico,
            telefone_medico,
            celular_medico,
            email_medico 
        ]
      );
  
      res.status(201).send({
        message: "Médico adicionado com sucesso!",
        body: {
          medico: {
            nome_especialidade,
            nome_medico,
            crm_medico,
            cpf_medico,
            cidade_medico,
            telefone_medico: telefoneMedico,
            celular_medico,
            email_medico 
          },
        },
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({
        error: "Erro interno do servidor ao criar um novo medico.",
      });
    }
  };
  
  //=> Método responsável por listar todos os Medicos: GET
  exports.listAllMedicos = async (req, res) => {
    const response = await db.query(
      "SELECT * FROM medico ORDER BY nome_medico ASC"
    );
    res.status(200).send(response.rows);
  };
  
  //=> Método responsável por listar um determinado 'Medico' por Id: GET Id
  exports.findMedicoById = async (req, res) => {
    const medicoId = req.params.id;
    const response = await db.query(
      "SELECT * FROM medico WHERE id_medico = $1",
      [medicoId]
    );
    res.status(200).send(response.rows);
  };
  
  //=> Método responsável por atualizar um determinado 'Medico' por Id: PUT Id
  exports.UpdateMedicoById = async (req, res) => {
    const medicoId = req.params.id;
    const {
        nome_especialidade,
        nome_medico,
        crm_medico,
        cpf_medico,
        cidade_medico,
        telefone_medico,
        celular_medico,
        email_medico 
    } = req.body;
  
    const response = await db.query(
      "UPDATE medico SET nome_especialidade=$1, nome_medico=$2, crm_medico=$3, cpf_medico=$4, cidade_medico=$5, telefone_medico=$6, celular_medico=$7, email_medico=$8 WHERE id_medico = $9",
      [
        nome_especialidade,
        nome_medico,
        crm_medico,
        cpf_medico,
        cidade_medico,
        telefone_medico,
        celular_medico,
        email_medico,
        medicoId
      ]
    );
  
    res.status(200).send({ message: "Medico atualizado com sucesso" });
  };
  
  //=> Método responsável por deletar um determinado 'Medico' por Id: DELETE Id
  exports.deleteMedicoById = async (req, res) => {
    const medicoId = req.params.id;
    await db.query("DELETE FROM medico WHERE id_medico = $1", [medicoId]);
  
    res.status(200).send({ message: "Médico deletado com sucesso!!" });
  };
  