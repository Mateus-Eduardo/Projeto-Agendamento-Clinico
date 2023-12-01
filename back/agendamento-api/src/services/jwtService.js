const jwt = require('jsonwebtoken');

const segredo = 'seu_segredo_secreto'; // Substitua pelo seu próprio segredo

module.exports = {
  // Função para criar token
  criarToken: (usuarioId) => {
    return jwt.sign({ usuarioId }, segredo, { expiresIn: '1h' });
  },

  // Função para verificar token
  verificarToken: (token) => {
    try {
      const decoded = jwt.verify(token, segredo);
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  },
};
