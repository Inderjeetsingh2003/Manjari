const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASEURL).then(()=>{
    console.log("database successfully connected ")
}).catch((error)=>
{
console.log(error.message)
console.log("database not connected")
})