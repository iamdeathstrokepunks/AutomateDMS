const express = require('express'),
    router = express.Router(),
    regController = require('../controllers/registration'),
    loginController = require('../controllers/login')



router.post('/automate/userRegister', regController.registerApi)
router.post('/automate/userLogin', loginController.loginApi)

module.exports = router;