
const jwt=require('jsonwebtoken')
const fetchuser=(req,res,next)=>
    {
        //Get the user from the jwt token and add id to req object
    
        const token=req.header('access-token'); 
        console.log("the value of token is:,",token)
        if(!token) 
        {
            res.status(401).send({error:"token not found in the header"})
        }
        
        try{
            const data = jwt.verify(token, process.env.SECRETKEY)
            req.user=data.user
            console.log("The id of the user is:", req.user.id);
            next()

    }
        catch(error){
            res.status(401).send({error:error.message})
        }
       
    }

    
    module.exports=fetchuser