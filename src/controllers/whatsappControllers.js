// Para que utilizar el Whatsapp hay que tener en consideracion dos cosas:
// - El token
// - Para recibir esos mensajes que llegan desde whatsapp

const verifyToken = (req, res) => {
     // try{
     //      var accessToken = "ARK23442TBUIAD3244LKJFSJS34534";
     //      var token = req.query["hub.verify_token"];
     //      var challenge = req.query["hub.challenge"]; // es lo que debemos devolver al Whatsapp una vez que verificamos  que el token que nos da Whatsapp igual al token que hemos construido.
     //      console.log(token);
     //      if (challenge != null && token != null && token == accessToken){
     //           res.send(challenge)
     //      }else{
     //           res.status(400).send();
     //      }
     // }catch(e){
     //      res.status(400).send();
     // }
     res.send("Hola mundo");
}

const receivedMessage = (req, res) => {
     res.send("Hola receivedMessage");
}

module.exports =  {
     verifyToken,
     receivedMessage
}