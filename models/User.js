// IMPORTACIONES
const { Schema, model } = require("mongoose");
// SCHEMAS
const userSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Nombre de usuario es requerido"],
    },
    lastname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true, //unico email, no permite registrar 2 veces el mimso correo
      lowercase: true, //solo minusculas
      trim: true, //no permite espacios
      match: [/^\S+@\S+\.\S+$/, "Por favor, use un email valido"], //validar que sea un correo con una expresion regular
    },
    password: {
      type: String,
      required: [true, "Password es requerido"],
    },
    image: {
      type: String,
      default: "",
    },
    myConsults: [{ type: Schema.Types.ObjectId, ref: "Consult" }],
  },
  {
    timestamps: true,
  }
);

// MODELOS
const User = model("User", userSchema);

// EXPORTACIÓN
module.exports = User;
