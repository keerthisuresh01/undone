
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const regModel = require('./models/regSchema')

router.use(express.urlencoded({
    extended: true })
);

router.get('/',async function(req,res)
{
    res.sendFile(__dirname+"/regiter.html")
    
})

router.post('/',async function(req,res){
    try{
        const salt = await bcrypt.genSalt()
        const hashedpass = await bcrypt.hash(req.body.password,salt)
        const member = new regModel(
                {
                    name:req.body.name,
                    password:hashedpass,
                    rollno:req.body.std_id,
                    age:req.body.age,
                    gender:req.body.gender,
                    department:req.body.branch,
                    email:req.body.email,
                    mobile:req.body.ph_no
                }
        )
        const a1 = await member.save()
        res.sendFile(__dirname+'/regsuc.html')
    }
    catch(err)
    {
        res.send("err")
    }
})

module.exports = router