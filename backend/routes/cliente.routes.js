"use strict";

const express = require("express");
const server = express();
let ClienteController = require("../controllers/cliente.controllers");


let api = express.Router();

//api.get("/cliente/:subject?", ClienteController.getActivities);
api.get("/cliente-prueba", ClienteController.pruebas);
api.post("/registrar", ClienteController.saveCliente);
api.get("/obtener", ClienteController.getCliente);


module.exports = api;