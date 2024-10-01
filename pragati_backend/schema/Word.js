const mongoose=require('mongoose')

const wordschema=mongoose.Schema
({
     type:{
        type:String,

     },
     word:{
        type:String,
     }

});


const Word=mongoose.model('Word',wordschema);
module.exports=Word;