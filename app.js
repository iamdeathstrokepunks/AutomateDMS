const express = require('express')
require('./src/database/connect')
const app = express()
const port = 3333
app.listen(port, () => console.log(`Example app listening on port port!`))