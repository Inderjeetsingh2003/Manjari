const Word=require('../schema/Word')

const addWord=(async(req,res)=>{

    try{
    const{word, type}=req.body
    console.log(req.body)
    let word_present=await Word.findOne({"word":word})

    if(word_present)
    {
        res.status(400).json({success:0,message:"user already present "})
    }

    else
    {
        new_word=new Word({
            word,
            type
        })

        await new_word.save();
        res.status(200).json({success:1,message:"word added successfully"})
    }
}
catch(error)
{
    console.log(error.message)
    return res.status(500).json({success:0,message:"internal servererror"})
}

})

module.exports={addWord}
