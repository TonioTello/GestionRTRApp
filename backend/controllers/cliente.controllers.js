"use strict";
//const Cliente = require("../models/Cliente.model");
const { Cliente } = require("../models");

const clienteCtrl = {};

clienteCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador Cliente ffer",
	});
}

clienteCtrl.getCliente = async( req , res ) =>{
    const cliente = await Cliente.find();
    res.json(cliente);   
};

clienteCtrl.saveCliente = async ( req , res ) =>{

	console.log("Hola Registrar Cliente");
	const params = req.body;
	console.log(params);

    const cliente = new Cliente ({
        nit: params.nit,
        nombre: params.nombre,
        apellido: params.apellido,
        empresa: params.empresa,
        ciudad: params.ciudad,
        telefono: params.telefono,
        email: params.email,
        direccion: params.direccion

    });

    const query = await Cliente.findOne({ 'nit': req.body. nit});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este nit ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await cliente.save();    
        res.json(cliente);   
    }  

};


module.exports = clienteCtrl;
