"use strict";
//const User = require("../models/User.model");
const { User } = require("../models");

const userCtrl = {};

userCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador User ffer",
	});
}


userCtrl.saveUser = async ( req , res ) =>{

	console.log("Hola Registrar User");
	const params = req.body;
	console.log(params);

    const user = new User ({
        nombre:  params.nombre,
        apellido: params.apellido,
        email:   params.email,
        password: params.password,
        rol: 'ROL_USER',
        foto: 'null'
    });

    const query = await User.findOne({ 'email': req.body. email});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este correo ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await user.save();    
        res.json(user);   
    }  


/*     const params = req.body;

    const user = new User ({
        nombre:  params.nombre,
        apellido: params.apellido,
        email:   params.email,
        password: params.password,
        rol: 'ROL_USER',
        foto: 'null'
    });

    console.log(params); */

/*     const query = await User.findOne({ 'email': req.body. email});
    
    if(query){                       
        res.status(404).send({message:'Este correo ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await user.save();    
        res.json(user);   
    }    */     
};


/* UserCtrl.getActivities = async (req, res) => {
	let activities = await User.find();

	let subjectId = req.params.subject;

	console.log("Subject Id = " + subjectId);

	let find = User.find({ subject: subjectId })
		.populate("subject")
		.exec()
		.then((doc) => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
}; */

module.exports = userCtrl;
