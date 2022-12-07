
const mongoose = require('mongoose')

const evtSch = mongoose.Schema({

    evtname:{
        type:String,
        require:true
    },
    evtdes:{
        type:String,
        require:true
    },
    PperT:{
        type:String,
        require:true
    },
    start:{
        type:String,
        require:true
    },
    end:{
        type:String,
        require:true
    },
    fee:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('evtModel',evtSch)