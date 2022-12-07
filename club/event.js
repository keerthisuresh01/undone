
const express = require('express')
const router = express.Router()
const evtModel = require('./models/eventSchema')

router.use(express.urlencoded({
    extended: true })
);

router.get('/:name',async function(req,res)

{
    const name = req.params.name
    const obj = await evtModel.find()
    res.render('event',{'user':obj,'name':name})
})


module.exports = router