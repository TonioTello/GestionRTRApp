"use strict";
//const User = require("../models/User.model");
const { User } = require("../models");

const userCtrl = {};

userCtrl.pruebas = async (req, res) => {
    console.log("Hola Registrar User");
	res.status(200).send({
		massage: "Probando controlador User ffer",
	});
}

userCtrl.getUser = async( req , res ) =>{
    const user = await User.find();
    res.json(user);   
};

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

};


userCtrl.logingUser = async( req , res ) =>{    
    console.log(`Contraseña enviada es : ${req.body.password}`);
      
      const email = req.body.email;
      const password = req.body.password;

      //const user = await User.find();
      const query = await User.findOne({ 'email': req.body. email});

      console.log(`query igual :  ${query}`);

      if(query){

        if(password==query.password){          
            console.log(`Datos del Usuario correponde a: ${query}`);      
            res.status(200).send(query);       
            //res.json(query);
          }
          else{            
            res.status(404).send({message:'Contraseña incorrecta...'});
          }            

      }else{
        res.status(404).send({message:'El correo no se encuentra registrado...'});
      }

     
};


module.exports = userCtrl;
