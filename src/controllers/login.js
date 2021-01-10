const bcrypt = require('bcrypt'),
    validator = require('../utility/validator'),
    JwtHelper = require('../utility/JWThelper'),
    userModel = require('../models/userModel'),
    jwtModel = require('../models/token')


let loginApi = async (req, res) => {

    req.checkBody('username', 'Please enter your username').notEmpty()
    req.checkBody('password', 'Please enter your password').notEmpty()
    let validationResult = await validator(req)
    if (!validationResult.status) {
        res.status(422).json({
            status: 422,
            message: "Please enter correct data",
            error: validationResult.data
        })
        return
    }

    let {
        username,
        password
    } = req.body

    let userData = await userModel.findOne({
        username: username
    })

    if (!userData) {
        res.status(404).json({
            status: 404,
            message: "username not exist"
        })
        return
    }
    if (bcrypt.compareSync(password, userData.password)) {
        let token_data = {
            name: userData.name,
            username: userData.username,
            account_number: userData.account_number
        }
        let token = await JwtHelper.JwtGenerator(token_data)

        if (token == false) {
            res.status(500).json({
                status: 500,
                message: 'Internal server error',
                error: "token generation error"
            })
            return
        }

        res.status(200).json({
            status: 200,
            token: token,
            message: "Login Success!!.."
        })
    } else {
        res.status(401).json({
            status: 401,
            message: "wrong credentials"
        })
        return
    }

}


module.exports = {
    loginApi: loginApi
}