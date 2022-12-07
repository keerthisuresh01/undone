
const mongoose = require('mongoose')

const regSch = mongoose.Schema({
    name:{
        type :String,
        require : true,
    },
    password:{
        type:String,
        require:true
    },
    rollno:{
        type: String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('regModel',regSch)