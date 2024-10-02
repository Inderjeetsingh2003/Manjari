const mongoose = require('mongoose');


// Admin Schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
   
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',  // Role, in case you have other roles in the future
    enum: ['admin']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },

 
});



// Export Admin model
const Admin=mongoose.model('Admin',adminSchema)
module.exports=Admin
