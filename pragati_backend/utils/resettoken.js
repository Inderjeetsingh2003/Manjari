const crypto=require('crypto')

 exports.resettoken=function() {
    const resettoken=crypto.randomBytes(20).toString('hex');
    console.log(resettoken)
const resetpasswordtoken=crypto.createHash('sha256').update(resettoken).digest('hex');
const resetpasswordexpire=Date.now()+15*60*1000 // 15 minutes;
return{
    resettoken,resetpasswordexpire,resetpasswordtoken
}

}

