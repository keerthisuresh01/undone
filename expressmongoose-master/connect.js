const mongoose=require('mongoose'); //importing mongoose

const ConnectDB= async ()=>{
    await mongoose.connect("mongodb+srv://keerthi_demo:01Jun2002@cluster0.md9ip.mongodb.net/Expressdemo?retryWrites=true&w=majority"); //if succes load else reject within particular time
}

module.exports= ConnectDB;