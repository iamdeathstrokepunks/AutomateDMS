const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const mongoDbUrl = "mongodb+srv://fcupiadmin:fcupiadmin@2@freecharge.a7fsx.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true, readPreference: "secondaryPreferred" })
const db = mongoose.connection

// CONNECTION EVENTS
// When successfully connected
db.on('connected', function () {
    console.log('Mongoose default connection open')
})


// If the connection throws an error
db.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
db.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    db.close(function () {
        console.log(
            'Mongoose default connection disconnected through app termination'
        )
        process.exit(0)
    })
})

module.exports = {
    db,
}
