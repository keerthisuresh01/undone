
const express = require('express')
const mongoose = require('mongoose')

const PORT= process.env.PORT||5000;

const url = "mongodb+srv://hari:hari@cluster0.b0w2u.mongodb.net/MediaClub?retryWrites=true&w=majority"

const app = express()


mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function()
{
    console.log("connected ")
})

app.use( express.static( "public" ) );
app.set('view engine','ejs')
app.use(express.json()) // declaring to the express FM that we use json format

const addrouter = require('./add')
const loginrouter = require('./login')
const eventrouter = require('./event')
const desrouter = require('./des')
const aboutrouter = require('./about')
const evtregrouter = require('./evtreg')


app.use('/add',addrouter)
app.use('/',loginrouter)
app.use('/event',eventrouter)
app.use('/des',desrouter)
app.use('/about',aboutrouter)
app.use('/evtreg',evtregrouter)

app.listen(PORT,()=>{
    console.log('Server running on port'+PORT)
});