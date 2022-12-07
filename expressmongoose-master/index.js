const express=require('express'); //importing express
const ConnectDB=require('./connect')
const app=express(); //creating object for express
const data=require('./user');
const PORT =process.env.PORT || 4000; //creating port
app.use(express.json());

app.get('/select',async (req,res)=>{
    const temp= await data.find();
    res.json(temp);
})

app.put('/update/:id',async (req,res)=>{
    const temp = await data.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.json(temp);

})

app.delete('/delete/:id',async (req,res)=>{
    const temp = await data.findByIdAndDelete(req.params.id);
    res.json(temp);

})



app.post('/insert',async (req,res)=>{   //creating  collection in db
    
    const temp = await data.create(req.body);

    // const temp= await data.create({
    //     name:'Rahul',
    //     email:'rahul@gmail.com',
    //     phone:9876543210
    // });
    res.json(temp);
})



//handling get request
app.get('/',(req,res)=>{
    res.status(200).json({data:"using nodemon"});
    //res.send("<p>Hello,its listening</p>");
}) //default route in same page

app.get('/home',(req,res)=>{
    res.send("<p>Welcome home</p>");
}) //routing at another page
app.listen(PORT,()=>{
    console.log("Server started listening");

    ConnectDB()
    .then(()=>{    //work after when it called successfully
        console.log("DB Connection Established");
    })
    .catch(()=>{  ///work when failed
        console.log("Connection Error");
    

    })
})

   //listening and call back(arrow function)

