const bcryptjs = require("bcryptjs");
const User = require("./../models/User");
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res) => {
  //CREACIÓN DE USUARIO
  const { name, lastname, email, password, image } = req.body;

  //VALIDACIONES
  //a) Datos vacios
  if ((!name, !email, !password)) {
    return res.status(500).json({
      msg: "Todos los campos son obligatorios",
      error: error,
    });
  }

  try {
    //GENERAR PASSWORD PARA BASE DE DATOS
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //CREAR USUARIO EN BASE DE DATOS
    const newUser = await User.create({
      name,
      lastname,
      email,
      image,
      password: hashedPassword,
    });

    //AUTENTICACION CON TOKENS
    //A.CREAR UN PAYLOAD (INFORMACION DEL USUARIO)
    const payload = {
      user: {
        id: newUser._id,
      },
    };

    //B. FIRMAR EL TOKEN
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 360000,
      },
      (error, token) => {
        if (error) throw error;

        res.json({
          data: token,
        });
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      res.json({
        msg: "Email ya registrado. Intente con otro",
        error: error,
      });
    } else {
      res.json({
        msg: "Hubo un error con la creacion de usuario",
        error: error,
      });
    }
  }
};

//INICIAR SESION
//AUTENTICAR QUE EL EMAIL Y CONTRASEÑA QUE PASE LA PERSONA COINCIDAN Y SE LE ENVIA UN TOKEN
exports.postLogin = async (req, res) => {
  //1.Obtener el Email y el Passworddel formulario (JSON)
  const { email, password } = req.body;

  try {
    //2.Encontrar un usuario en BD
    const foundUser = await User.findOne({ email });

    //3.Validación
    if (!foundUser) {
      return res.status(400).json({
        msg: "El usuario o la contraseña son incorrectos",
      });
    }

    //4.Evaluamos contraseña
    const verifiedPass = await bcryptjs.compare(password, foundUser.password);
    if (!verifiedPass) {
      return await res.json({
        msg: "El usuario o la contraseña son incorrectos",
      });
    }

    //6.Genera JSON WEB TOKEN

    //6.A ESTABLECER UN PAYLOAD (DATOS DEL USUARIO)
    const payload = {
      user: {
        id: foundUser.id,
      },
    };

    //6.B FIRMA DEL JWT
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 36000,
      },
      (error, token) => {
        if (error) throw error;
        res.json({
          data: token,
        });
      }
    );
    return;
  } catch (error) {
    res.json({
      mgs: "Hubo un problema con la autenticación",
      data: error,
    });
  }
};

//VERIFICAR USUARIO
exports.getVerifyToken = async (req, res) => {
  //DESECRIPTAR EL PROCESO DEL TOKEN
  try {
    //BUSCAR EL ID DEL USUARIO (DEL TOKEN ABIERTO) EN BASE DE DATOS
    const foundUser = await User.findById(req.user.id).select("-password");
    return res.json({
      msg: "Datos de usuario encontrado",
      data: foundUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error con el usuario",
    });
  }
};

//lEER USUARIOS
exports.readAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      msg: "Usuarios obtenidos con éxito",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};

//LEER UN USUARIO
exports.readOneUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("myconsults");
    res.json({
      msg: "Usuario obtenido con éxito",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};

//EDITAR DATOS DE USUARIO
exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, country, description, image, experience } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        lastname,
        country,
        image,
      },
      { new: true }
    );
    res.json({
      msg: "Datos actualizada con éxito",
      data: updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};

exports.addConsult = async (req, res) => {
  const { id } = req.params;

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: { myconsults: id },
      },
      { new: true }
    );
    res.json({
      msg: "Datos actualizada con éxito",
      data: updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};
