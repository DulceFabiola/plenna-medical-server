// 1. IMPORTACIONES
const { Schema, model } = require("mongoose");
// 2. SCHEMAS
const patientSchema = Schema(
  {
    name: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: "",
    },
    weight: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    allergies: {
      type: String,
      default: "",
    },
    myconsults: [{ type: Schema.Types.ObjectId, ref: "Consult" }],
  },
  {
    timestamps: true,
  }
);

// 3. MODELOS
const Patient = model("Patient", patientSchema);

// 4. EXPORTACIÓN
module.exports = Patient;
