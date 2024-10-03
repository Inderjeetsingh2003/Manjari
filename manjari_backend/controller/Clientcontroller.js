const Client=require('../schema/ClientSchema')
const axios=require('axios')
const fs=require('fs')
const path=require('path')

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


const speech=(async(req,res)=>
{
try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        // Send POST request to Flask server and expect a stream
        const response = await axios.post(process.env.SPEECHADDRESS, { text }, {
            responseType: 'stream', // Expecting audio file stream in response
        });

        // Create directory in root folder if it doesn't exist
        const outputDir = path.join(__dirname, '..', 'output_files');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        // Define output file path in output_files/ directory
        const outputPath = path.join(outputDir, 'output_from_flask.mp3');

        // Pipe the response data into the output file
        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        writer.on('finish', () => {
            res.json({ message: 'File received and saved.', file: outputPath });
        });

        writer.on('error', (err) => {
            res.status(500).json({ error: 'Error saving the file', details: err });
        });
    } catch (error) {
        console.error('Error communicating with the Flask server:', error);
        res.status(500).json({ error: 'Failed to communicate with the Flask server', details: error.message });
    }
})


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("the  login is:", " ", email, " ", password);
      let client=await Client.findOne({"ContactDetails.email":{$in:email}});
      if (!client) {
        return res
          .status(404)
          .json({ success: 0, message: "user does not exits with this email" });
      }
      const comparepass = await bcrypt.compare(password, client.password);
      if (!comparepass) {
        return res.status(400).json({ success: 0, message: "invalid password" });
      }
     
      const accesstoken = generateaccesstoken(client._id)
      return res.status(200).json({ success: 1, accesstoken,client });
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ success: 0, message: "internal server error" });
    }
  };


module.exports={signup,speech,login}