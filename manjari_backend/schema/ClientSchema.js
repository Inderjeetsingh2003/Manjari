const mongoose=require('mongoose')
const clientschema=mongoose.Schema({
    ChildName:{
        type:String,
        required:true
    },
    
    DateofBirth:{
    type:Date,
    required:true
    },
    Disabilities:{
        type:[String],
        enum:['autism','dyslexic'],
        default:[]
    },
    Difficulties:{
        type:[String],
        
        default:[]
    },
    Parentage:{
        MotherName:{
            type:String
        },
        FatherName:{
            type:String
        },
        Guardian:{
                Name:{
                    type:String,
                    default:null
                },
                Relation:{
                    type:String,
                    default:null
                }
        }
    },

Address:{
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
}
,
ContactDetails:{
    email:{
        type:[String]
    },
    MobileNumber:{
        type:[String]
    }
},
password:{
    type:String
},
resetpasswordtoken:String,
resetpasswordexpire:String ,
photourl:{
    type:String,
    default:'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'
},
date:{
    type:Date,
    default:Date.now
    
},

});


const Client=mongoose.model('client',clientschema);
module.exports=Client;
