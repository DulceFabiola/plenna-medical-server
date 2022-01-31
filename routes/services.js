const express = require("express");
const router = express.Router();

const {
  readAllServices,
  readOneService,
} = require("./../controllers/servicesController");

//RUTEO

//lEER SERVICIOS
router.get("/readall", readAllServices);

//LEER UN SERVICIO
router.get("/readone/:id", readOneService);

//EXPORTACION
module.exports = router;
