const mongoose=require('mongoose');   //importing mongoose

const userSchema=new mongoose.Schema({     //passing through schema
    name:String,
    email:String,
    phone:Number
});


const data=mongoose.model('user',userSchema);

module.exports=data;