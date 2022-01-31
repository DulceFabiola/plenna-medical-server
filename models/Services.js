// IMPORTACIONES
const { Schema, model } = require("mongoose");
//SCHEMAS
const servicesSchema = Schema(
  {
    type: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//MODELOS
const Services = model("Services", servicesSchema);

//EXPORTACIÓN
module.exports = Services;
