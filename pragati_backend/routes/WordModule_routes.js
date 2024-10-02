const express=require("express")
const { addAdminWord, addClientword } = require("../controller/WordModule")
const fetchuser=require('../middleware/fetchuser')
const router=express.Router()

router.route('/addadminwords').post(fetchuser,addAdminWord)
router.route("/addclientwords").post(fetchuser,addClientword)
module.exports =router