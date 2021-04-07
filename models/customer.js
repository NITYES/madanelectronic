const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    product:String 
})

module.exports=mongoose.model("Customer",customerSchema)