//IMPORTACIONES
const mongoose = require("mongoose");
const Services = require("../models/Services");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const services = [
  {
    type: "Consult",
    description: "Básica",
    price: 750,
  },
  {
    type: "Consult",
    description: "Plenna",
    price: 950,
  },
  {
    type: "Consult",
    description: "Plus",
    price: 1200,
  },
  {
    type: "Study",
    description: "Ultrasonido pélvico",
    price: 500,
  },
  {
    type: "Study",
    description: "Exploración mamaria",
    price: 500,
  },
  {
    type: "Study",
    description: "Papanicolau",
    price: 500,
  },
  {
    type: "Study",
    description: "Colposcopía",
    price: 500,
  },
  {
    type: "Study",
    description: "Chequeo anual",
    price: 1200,
  },
  {
    type: "Service",
    description: "Implante subdérmico",
    price: 2000,
  },
  {
    type: "Service",
    description: "SIU",
    price: 2500,
  },
  {
    type: "Service",
    description: "DIU",
    price: 1200,
  },
  {
    type: "Product",
    description: "Copa menstrual",
    price: 500,
  },
  {
    type: "Product",
    description: "Juguete sexual",
    price: 500,
  },
];

//DECLARAR FUNCIÓN
const createListServices = async () => {
  const newListServices = await Services.create(services);
  console.log(newListServices);
  mongoose.connection.close();
};

//INVOCACIÓN
createListServices();
