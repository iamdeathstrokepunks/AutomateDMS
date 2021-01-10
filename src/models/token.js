const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema(
  {

    account_number: { type: String },
    token:{type:String},
    cts : {type : Number},
    uts : {type : Number}

  }
)


module.exports = mongoose.model('tokens',tokenSchema )