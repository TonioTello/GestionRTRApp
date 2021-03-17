const mongoose = require("mongoose");
const { Schema } = mongoose;

const EquipoSchema = new Schema({
	nombre: { type: String },
	descripcion: { type: String },
	serial: { type: String },
    registro_invima: { type: String },
    pais_fabricacion: { type: String },
    fecha_compra : { type: Date },
    fecha_venta : { type: Date },
    observacion: { type: String },
});

module.exports = mongoose.model("Equipo", EquipoSchema);