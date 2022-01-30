//1.IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  createConsult,
  readAllConsults,
  readOneConsult,
  editConsult,
} = require("./../controllers/consultController");
//2.RUTEO

//CREAR CONSULTA
router.post("/create", createConsult);

//lEER CONSULTAS
router.get("/readall", readAllConsults);

//LEER UNA CONSULTA
router.get("/readone/:id", readOneConsult);

//EDITAR UNA CONSULTA
router.put("/edit/:id", editConsult);

//3.EXPORTACION
module.exports = router;
