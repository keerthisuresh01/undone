
const { name } = require('ejs');
const express = require('express')
const router = express.Router()
const evtModel = require('./models/eventSchema')

router.use(express.urlencoded({
    extended: true })
);

router.get('/:id/:name',async function(req,res)
{
    const samp = req.params.id
    const name = req.params.name
    const obj = await evtModel.find()
    res.render('des',{'user':obj,'samp':samp,'name':name})
    
})


module.exports = router