const express=require("express")
const { signup, speech, login } = require("../controller/Clientcontroller")
const router=express.Router()

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/speech').post(speech)
module.exports=router