const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ mensagem: "Token não fornecido" });
  }

  jwt.verify(token, "exemplo", (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: "Token inválido" });
    }

    req.session = decoded;

    next();
  });
}

module.exports = authMiddleware;
