const authRouter = require('./routes/auth-routes.js');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
const pacienteRoute = require('./routes/paciente.routes');
const funcionariosRoutes = require('./routes/funcionarios.routes');
const medicoRoutes = require('./routes/medico.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use('/api/', pacienteRoute);
app.use('/api/', funcionariosRoutes);
app.use('/api/', medicoRoutes);
app.use('/api/auth/', authRouter);

module.exports = app;
