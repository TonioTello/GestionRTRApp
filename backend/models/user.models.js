const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	nombre: { type: String },
	apellido: { type: String },
	email: { type: String },
    password: { type: String },
    rol: { type: String },
    foto: { type: String },
});

//module.exports = mongoose.model("User", UserSchema);
module.exports = module.exports = mongoose.model("User", UserSchema);