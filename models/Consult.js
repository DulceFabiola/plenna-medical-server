//1.IMPORTACIONES
const { Schema, model } = require("mongoose");

//2.SCHEMA
const consultSchema = Schema(
  {
    condition: {
      type: String,
      default: "",
    },
    examination: {
      type: String,
      default: "",
    },
    diagnostic: {
      type: String,
      default: "",
    },
    prescription: {
      type: String,
      default: "",
    },
    treatment: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },

    patient: { type: Schema.Types.ObjectId, ref: "Patient" },
    services: [{ type: Schema.Types.ObjectId, ref: "Services" }],
  },
  {
    timestamps: true,
  }
);

//3.MODELO
const Consult = model("Consult", consultSchema);

//4.EXPORTACION
module.exports = Consult;
