const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    // unique number for each user
    account_number: {
        type: Number,
        unique: true
    },
    cts: {
        type: Number
    },
    uts: {
        type: Number
    },
    // To store the name of all the folders created by the user.
    folders: {
        type: [
            {
                type: [String]
            }
        ]
    }

})


module.exports = mongoose.model('users', userSchema)