//IMPORTACIONES
const Patient = require("../models/Patient");
const Consult = require("./../models/Consult");
//CREAR CONSULT
exports.createConsult = async (req, res) => {
  const {
    condition,
    examination,
    diagnostic,
    prescription,
    treatment,
    notes,
    patient,
  } = req.body;

  try {
    const newConsult = await Consult.create({
      condition,
      examination,
      diagnostic,
      prescription,
      treatment,
      notes,
      patient,
    });

    const updatedPatient = await Patient.findByIdAndUpdate(
      patient,
      {
        $push: { myconsults: newConsult },
      },
      { new: true }
    );
    console.log(updatedPatient);
    res.json({
      msg: "Consulta creada con éxito",
      data: newConsult,
      user: updatedPatient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error creando consulta",
      error: error,
    });
  }
};

//lEER CONSULTAS
exports.readAllConsults = async (req, res) => {
  try {
    const consults = await Consult.find({});
    res.json({
      msg: "Consultas obtenidas con éxito",
      data: consults,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};

//LEER UNA CONSULTA
exports.readOneConsult = async (req, res) => {
  const { id } = req.params;

  try {
    const consult = await Consult.findById(id);
    res.json({
      msg: "Consulta obtenida con éxito",
      data: consult,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};

//EDITAR UNA CONSULTA
exports.editConsult = async (req, res) => {
  const { id } = req.params;

  const {
    condition,
    examination,
    diagnostic,
    prescription,
    treatment,
    notes,
    patient,
  } = req.body;
  try {
    const updateConsult = await Consult.findByIdAndUpdate(
      id,
      {
        condition,
        examination,
        diagnostic,
        prescription,
        treatment,
        notes,
        patient,
      },
      { new: true }
    );
    res.json({
      msg: "Consulta actualizada con éxito",
      data: updateConsult,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};
