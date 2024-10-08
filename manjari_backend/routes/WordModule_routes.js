const express=require("express")
const { addAdminWord, addClientword, retrivewords, deleteword } = require("../controller/WordModule")
const fetchuser=require('../middleware/fetchuser')
const router=express.Router()

router.route('/addadminwords').post(fetchuser,addAdminWord)
router.route("/addclientwords").post(fetchuser,addClientword)
router.route("/getwords").get(fetchuser,retrivewords)
router.route("/deleteword/:folderName/:wordId").post(fetchuser,deleteword)
module.exports =router