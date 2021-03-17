const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentaSchema = new Schema({	
    equipos: [{ type: String }],
    cliente_id :{ type: String },

});

module.exports = mongoose.model("Venta", VentaSchema);