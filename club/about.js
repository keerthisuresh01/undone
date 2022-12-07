
const express = require('express')
const router = express.Router()
const evtModel = require('./models/eventSchema')

router.use(express.urlencoded({
    extended: true })
);

router.get('/:name',async function(req,res)

{
    const name = req.params.name
    res.render('about',{'name':name})
})


module.exports = router