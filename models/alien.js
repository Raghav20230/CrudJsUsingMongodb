const mongoose =require('mongoose')  //schemas

const alienSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  tech:{
    type:String,
    required:true
  },
  sub:{
    type:String,
    required:true,
    default:false
  }
})
module.exports = mongoose.model('Alien',alienSchema)