const express = require("express");
const server = express();
const cors = require("cors");


//Middlewares
server.use(express.json()); //Tratar datos en formato json
server.use(express.static(__dirname + "/../public")); // acceder directamente a los directorios del proyectos, en este caso la carpeta public
server.use(cors());


let user_routes = require("../routes/user.routes");
server.use("/api/usuario", user_routes);

module.exports = server;
