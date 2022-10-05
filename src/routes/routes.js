const express = require('express');
const router = express.Router();
const whatsAppController = require('../controllers/whatsappControllers');

router
     .get('/',whatsAppController.verifyToken)
     .post('/',whatsAppController.receivedMessage)

module.exports = router;