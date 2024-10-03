const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASEURL).then(()=>
{
    console.log("database is connected successfully")
}).catch((error)=>
{
    console.log("error at :",error.message)
})

