const Client=require('../schema/ClientSchema')

const bcrypt=require('bcrypt');
const { generateaccesstoken } = require('../utils/tokengeneration');
// signup 
const signup=(async(req,res)=>
{
    try{

        const{ChildName,DateofBirth,Disabilities,Difficulties,MotherName,FatherName,GuardianName,GurdianRelation,street,city,pincode,state,country,email,MobileNumber,password,photourl}=req.body;
        console.log(req.body)
        let client=await Client.findOne({"ContactDetails.email":{$in:email}});
        if(client){
            res.status(400).json({success:0,message:"user already present "})
        }
        else{

            const hashpass=await bcrypt.hash(password,10);
         client=new Client({
            ChildName,
            DateofBirth:new Date(DateofBirth),
            Disabilities,
            Difficulties,
            Parentage:{
                MotherName,
                FatherName,
                Guardian:{
                    Name:GuardianName||undefined,
                    relation:GurdianRelation||undefined
                }
            },
            Address:{
                street,
                city,
                pincode,
                state,
                country
            },
            ContactDetails:{
                email,
                MobileNumber
            },
            password:hashpass,
            photourl:photourl||undefined
         })
           
            await client.save();
           const accesstoken= generateaccesstoken(client._id)
            res.status(200).json({success:1,message:"client data saved successfully",client,accesstoken})
        }
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(500).json({success:0,message:"internal servererror"})
    }


})


module.exports={signup}