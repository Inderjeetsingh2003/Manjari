const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const app=express()
const path=require('path')
require('../pragati_backend/database_connection/dbcon')
app.use('/client',require(path.join(__dirname,'./routes/Client_routes.js')))

const port=process.env.PORT
app.listen(port,()=>
{
    console.log(`the server is running on ${port}`)
})