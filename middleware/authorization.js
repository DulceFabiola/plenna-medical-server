//ES UN MIDDLEARE DE RUTA
//DESENCRIPTAR EL JWT
const jwt = require("jsonwebtoken");
const decrypt = async (req, res, next) => {
  //CAPTURAR EL TOKEN
  const token = req.header("x-auth-token");

  //SI NO HAY TOKEN:
  if (!token) {
    return res.status(400).json({
      msg: "No hay token, permiso no valido",
    });
  }

  //HAY TOKEN
  try {
    //ABRIRL EL TOKEN
    const openToken = await jwt.verify(token, process.env.SECRET);
    req.user = openToken.user;
    next();
  } catch (error) {
    res.json({
      msg: "Hubo un error con el token",
    });
  }
};

module.exports = decrypt;
