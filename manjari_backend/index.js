const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const app=express()
app.use(express.json())
const path=require('path')
require('../manjari_backend/database_connection/dbcon')
app.use('/client',require(path.join(__dirname,'./routes/Client_routes.js')))
app.use('/admin',require(path.join(__dirname,'./routes/Admin_routes.js')))
app.use('/words',require(path.join(__dirname,'./routes/WordModule_routes.js')))


const port=process.env.PORT
app.listen(port,()=>
{
    console.log(`the server is running on ${port}`)
})