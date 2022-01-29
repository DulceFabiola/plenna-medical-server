//IMPORTACIONES
const Patient = require("./../models/Patient");

//GET PATIENTS
exports.readAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.json({
      msg: "Pacientes obtenidos con éxito",
      data: patients,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};

//GET A PATIENT
exports.readOnePatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    res.json({
      msg: "Paciente obtenido con éxito",
      data: patient,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};

//EDIT PATIENT
exports.editPatient = async (req, res) => {
  const { id } = req.params;

  const { name, lastname, age, weight, height, allergies } = req.body;
  try {
    const updatePatient = await Patient.findByIdAndUpdate(
      id,
      {
        name,
        lastname,
        age,
        weight,
        height,
        allergies,
      },
      { new: true }
    );
    res.json({
      msg: "Datos de paciente actualizados con éxito",
      data: updatePatient,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};
