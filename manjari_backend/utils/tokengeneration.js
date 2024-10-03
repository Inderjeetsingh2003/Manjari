const jwt=require('jsonwebtoken')
exports.generateaccesstoken=function (id)
{
    console.log("the id funciton is getting to generate the token is:",id)
    const data = {
        user: {
            id: id
        }
    }
    console.log("data.user.id",data.user.id)
const accesstoken=jwt.sign(data,process.env.SECRETKEY)
return accesstoken
}