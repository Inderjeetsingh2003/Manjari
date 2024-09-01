const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://rahul6005:rahul2003@cluster0.pj579.mongodb.net/pragati').then(()=>{
    console.log("database successfully connected ")
}).catch((error)=>
{
console.log(error.message)
console.log("database not connected")
})