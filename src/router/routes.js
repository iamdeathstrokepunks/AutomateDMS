const express = require('express'),
    router = express.Router(),
    regController = require('../controllers/registration')



router.post('/automate/userRegister', regController.registerApi)