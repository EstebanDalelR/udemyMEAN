'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LookSchema = new Schema({
  image:String,
  linkURL:String,
  tittle: String,
  description: String,
  tags [{
    type:String
  }],
  _creator:{
  type: Schema.ObjectId,
  ref:'User'
  }
  email: String,
  usename: String,
  createTime{
    type: Date,
    'default': Date.now
  }
  view{
    type: Number,
    'default':0
  }
  upvotes{
    type: Number,
    'default':0
  }
})



module.exports = mongoose.model ('Look', LookSchema);
