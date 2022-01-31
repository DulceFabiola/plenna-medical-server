//IMPORTACIONES
const Services = require("./../models/Services");
const Consult = require("./../models/Consult");

//GET SERVICES
exports.readAllServices = async (req, res) => {
  try {
    const services = await Services.find({});
    res.json({
      msg: "Servicios obtenidos con éxito",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};

//GET A SERVICES
exports.readOneService = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Services.findById(id);
    res.json({
      msg: "Servicio obtenido con éxito",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};

exports.addServices = async (req, res) => {
  const { id } = req.params;

  try {
    const updateConsult = await Consult.findByIdAndUpdate(
      req.consults.id,
      {
        $push: { services: id },
      },
      { new: true }
    );
    res.json({
      msg: "Datos actualizados con éxito",
      data: updateConsult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};
