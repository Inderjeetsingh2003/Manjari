const express=require("express")
const router=express.Router()

router.get("/singup",(req,res)=>
{
    res.status(200).json("the end point is getting triggered")
})
module.exports=router