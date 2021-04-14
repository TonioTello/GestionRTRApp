"use strict";
//const Servicio = require("../models/Servicio.model");
const { Servicio } = require("../models");

const servicioCtrl = {};

servicioCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador Servicio ffer",
	});
}

servicioCtrl.getServicios = async( req , res ) =>{
    const servicio = await Servicio.find();
    res.json(servicio);   
};

servicioCtrl.saveServicio = async ( req , res ) =>{

	console.log("Hola Registrar Servicio");
	const params = req.body;
	console.log(params);

    const servicio = new Servicio ({
        tipoServicio: params.tipoServicio,
        quienNotifica: params.quienNotifica,
        cargo: params.cargo,
        telefono: params.telefono,
        email: params.email,
        fechaServicio: params.fechaServicio,
        quienRecibe: params.quienRecibe,
        quienEjecuta: params.quienEjecuta,
        numeroOrden: params.numeroOrden,
        estadoFisico: params.estadoFisico,
        estadoFuncional: params.estadoFuncional,
        tiempoEjecucion: params.tiempoEjecucion,
        estado: params.estado,
        observaciones: params.observaciones,
        cliente: params.cliente,
        equipo: params.equipo
    });

/*     const query = await Servicio.findOne({ 'numeroOrden': req.body. numeroOrden});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este numero de orden ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await servicio.save();    
        res.json(servicio);   
    }   */

    await servicio.save();   // Se valida numero de orden reptida en la actulizacion


};

servicioCtrl.searchServicio = async( req , res ) =>{    

    const query = await Servicio.findOne({ 'nit': req.body. nit});
    
    console.log(query);

    //query = query.nit.trim;
    
    if(query){                       
        res.status(200).send(query);       }        
    else {
        res.status(404).send({message:'Servicio no se encuentra registrado. Registrarlo e intentar nuevamente'});
    }            

};


module.exports = servicioCtrl;
