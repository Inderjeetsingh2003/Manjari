const jwt=require('jsonwebtoken')
exports.generateaccesstoken=function (id)
{
    const user={
        id:id
    }
const accesstoken=jwt.sign(user,process.env.SECRETKEY)
return accesstoken
}