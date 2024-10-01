const express=require("express")
const { addWord } = require("../controller/Wordcontoller")
const router=express.Router()

router.route('/addword').post(addWord)

module.exports=router