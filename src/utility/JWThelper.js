const jwt = require('jsonwebtoken'),
    jwtModel = require('../models/token')



const JwtGenerator = async (token_data) => {
    try {
        let token = jwt.sign(token_data, 'FchaRG3up!2.o', {
            expiresIn: '15m',
            algorithm: 'HS512'
        })
        let saveToken = await jwtModel({
            account_number: token_data.account_number,
            token: token,
            cts: Date.now(),
            uts: Date.now()
        }).save()
        return token
    } catch (error) {
        console.log(error)
        return false
    }
}
const JWTVerification = async (token) => {
    let istoken = await jwtModel.findOne({
        token: token
    })
    if (istoken) {
        let decoded_data = jwt.verify(token, 'FchaRG3up!2.o', {
            expiresIn: '15m',
            algorithm: 'HS512'
        })
        return {
            status: true,
            message: "",
            data: decoded_data
        }
    } else {
        return {
            status: false,
            message: "Unauthorized User"
        }
    }
}

module.exports = {
    JwtGenerator: JwtGenerator,
    JWTVerification: JWTVerification
}