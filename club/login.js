
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const regModel = require('./models/regSchema');
const evtModel = require('./models/eventSchema');
const { post } = require('./add');




router.use(express.urlencoded({
    extended: true })
);

router.get('/',async function(req,res)
{
    res.sendFile(__dirname+"/login.html")
})

router.post('/',async function(req,res)
{
    try
    {
        const name = {name:req.body.fName}
        const pass = await regModel.findOne(name)
        const usrname = pass.name
        console.log(usrname)
        console.log(pass)
        console.log(pass.password)
        console.log(req.body.password)
        if(await bcrypt.compare(req.body.password,pass.password))
        {
            var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            var shouldgive = fullUrl +'event/'+req.body.fName
            console.log(shouldgive)
            res.redirect(shouldgive)
        }
        else
        {
            res.sendFile(__dirname+'/tryagain.html')
        }
    }
    catch(err)
    {
        res.sendFile(__dirname+'/unregistered.html')
    }
})

module.exports=router

