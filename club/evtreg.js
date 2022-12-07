
const express = require('express')
const router = express.Router()


router.use(express.urlencoded({
    extended: true })
);

router.get('/',async function(req,res)
{
res.sendFile(__dirname+'/evtreg.html')
    
})

module.exports = router