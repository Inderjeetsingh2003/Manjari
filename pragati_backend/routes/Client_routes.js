const express=require("express")
const { signup, speech } = require("../controller/Clientcontroller")
const router=express.Router()

router.route('/signup').post(signup)
router.route('/speech').post(speech)
module.exports=router