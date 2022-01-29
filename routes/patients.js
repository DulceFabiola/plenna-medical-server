const express = require("express");
const router = express.Router();

const {
  readAllPatients,
  readOnePatient,
  editPatient,
} = require("./../controllers/patientController");

//RUTEO

//lEER PACIENTES
router.get("/readall", readAllPatients);

//LEER UN PACIENTE
router.get("/readone/:id", readOnePatient);

//EDITAR PACIENTE
router.put("/edit/:id", editPatient);

//EXPORTACION
module.exports = router;
