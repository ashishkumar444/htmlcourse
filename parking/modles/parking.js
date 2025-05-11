const mongoose=require('mongoose')


const parkschema=mongoose.Schema({
    vno:String,
    vin:{type:String,default:new Date()},
    vtype:{type:String,required:true},
    status:{type:String,default:'Parked',required:true},
    vout:Date,
    amount:String,
    parkedDate:{type:String,default:new Date()}
})
  


module.exports=mongoose.model('parking',parkschema)