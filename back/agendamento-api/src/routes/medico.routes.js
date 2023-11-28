const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medico.controller');

// => Definindo as rotas do CRUD - 'medico'

// => Rota responsável por criar um novo medico: (Post): localhost:3000/api/medicos
router.post('/medicos', medicoController.createMedico);

// => Rota responsável por listar todos os medicos: (GET): localhost:3000/api/medicos
router.get('/medicos', medicoController.listAllMedicos);

// = > Rota responsável por listar um medicos por Id: (GET): localhost:3000/api/medicos/Id
router.get('/medicos/:id', medicoController.findMedicoById);

// = > Rota responsável por atualizar um determinado medicos por Id: (PUT): localhost:3000/api/medicos/Id
router.put('/medicos/:id', medicoController.UpdateMedicoById);

// = > Rota responsável por deletar/excluir um determinado medicos por Id: (PUT): localhost:3000/api/medicos/Id
router.delete('/medicos/:id', medicoController.deleteMedicoById);


module.exports = router;

