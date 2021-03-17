const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
	nit: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    empresa: { type: String },
	ciudad: { type: String },	
    telefono: { type: String },
    email: { type: String },
    direccion: { type: String },
    
});

module.exports = mongoose.model("Cliente", ClienteSchema);
