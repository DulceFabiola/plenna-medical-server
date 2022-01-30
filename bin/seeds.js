//IMPORTACIONES
const mongoose = require("mongoose");
const Patient = require("./../models/Patient");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const patients = [
  {
    name: "Diana",
    lastname: "de Temiscira",
    age: "20 años",
    weight: "52 Kg",
    height: "1.60 m",
    allergies: "Polen",
  },
  {
    name: "Hermione",
    lastname: "Granger",
    age: "30 años",
    weight: "60 Kg",
    height: "1.70 m",
    allergies: "",
  },
];

//DECLARAR FUNCIÓN
const createListPatients = async () => {
  const newListPatients = await Patient.create(patients);
  console.log(newListPatients);
  mongoose.connection.close();
};

//INVOCACIÓN
createListPatients();
