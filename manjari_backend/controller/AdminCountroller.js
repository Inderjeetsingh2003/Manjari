const bcrypt=require('bcrypt')
const Admin =require('../schema/AdminSchema')
const { generateaccesstoken } = require('../utils/tokengeneration');
const signup = async (req, res) => {
    const { name, email, password,role } = req.body;
    console.log("the singup is:", name, " ", email, " ", password);
    // return res.status(200).json("got the google details")
  
    try {
      // finding the user in the data base
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res
          .status(200)
          .json({ success: 0, message: "user already exists with this email" });
      } else {
        const hashpassword = await bcrypt.hash(password, 10);
        
  
        
        admin = new Admin({
          name,
          email,
          password: hashpassword,
          role
        });
        await admin.save();
        const accesstoken=generateaccesstoken(admin._id)
        return res.status(200).json({ success: 1, accesstoken,admin });
      }
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ success: 0, message: "internal server error" });
    }
  };
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("the  login is:", " ", email, " ", password);
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res
          .status(404)
          .json({ success: 0, message: "user does not exits with this email" });
      }
      const comparepass = await bcrypt.compare(password, admin.password);
      if (!comparepass) {
        return res.status(400).json({ success: 0, message: "invalid password" });
      }
     console.log("the admin id while logi is :",admin._id)
      const accesstoken = generateaccesstoken(admin._id)
      return res.status(200).json({ success: 1, accesstoken,admin });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ success: 0, message: "internal server error" });
    }
  };
  
  module.exports={signup,login}