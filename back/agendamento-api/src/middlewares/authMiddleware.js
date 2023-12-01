
const jwtService = require ('../services/jwtService.js');

module.exports = (req, res, next) => {
  // Obtenha o token do cabeçalho
  const token = req.header('x-auth-token');

  // Verifique se há token
  if (!token) {
    return res.status(401).json({ erro: true, mensagem: 'Token ausente, autenticação negada' });
  }

  try {
    // Verifique o token
    const decoded = jwtService.verificarToken(token);
    req.usuario = decoded.usuarioId;
    next(); // Avance para a próxima middleware
  } catch (error) {
    return res.status(401).json({ erro: true, mensagem: 'Token inválido' });
  }
};
