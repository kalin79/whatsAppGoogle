// Para que utilizar el Whatsapp hay que tener en consideracion dos cosas:
// - El token
// - Para recibir esos mensajes que llegan desde whatsapp

const verifyToken = (req, res) => {
     res.send("Hola verifyToken");
}

const receivedMessage = (req, res) => {
     res.send("Hola receivedMessage");
}

module.exports =  {
     verifyToken,
     receivedMessage
}