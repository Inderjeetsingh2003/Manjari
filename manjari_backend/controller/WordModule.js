const { default: mongoose } = require("mongoose");
const {AdminWord,ClientWord}=require("../schema/WordsSchema")

const addAdminWord = async (req, res) => {
    try {
        const { levelName, folderName, word, wordtype } = req.body;
        console.log("add admin word", req.user.id);

        // Step 1: Check if the word already exists across all admins
        const wordExists = await AdminWord.findOne({
            "folders.words.word": word
        });

        if (wordExists) {
            return res.status(400).json({
                message: `The word '${word}' already exists in the system. Please choose a different word.`
            });
        }

        // Step 2: Check if the folder exists for the admin and levelName
        let adminWord = await AdminWord.findOne({
            adminId: req.user.id,
            levelName: levelName,
            "folders.folderName": folderName
        });

        if (adminWord) {
            // Folder exists, so push the word into the folder
            adminWord = await AdminWord.findOneAndUpdate(
                {
                    adminId: req.user.id,
                    levelName: levelName,
                    "folders.folderName": folderName,
                },
                {
                    $push: { "folders.$.words": { word, wordtype }
                }},
                { new: true }
            );
        } else {
            // Folder doesn't exist, so create a new folder and add the word to it
            adminWord = await AdminWord.findOneAndUpdate(
                {
                    adminId: req.user.id,
                    levelName: levelName,
                },
                {
                    $push: {
                        folders: {
                            folderName: folderName,
                            words: [{ word, wordtype, addedBy: "admin", createdAt: new Date() }]
                        }
                    }
                },
                { new: true, upsert: true }  // Creates a new document if none exists
            );
        }

        return res.status(200).json({
            message: `The word '${word}' was added successfully.`,
            adminWord: adminWord
        });
    } catch (error) {
        // Handle any other errors
        console.error("Error adding word:", error);
        return res.status(500).json({
            message: "An error occurred while adding the word",
            error: error.message
        });
    }
};

const addClientword=async(req,res)=>
{
    try {
        const { levelName, folderName, word, wordtype } = req.body;
        console.log("add admin word", req.user.id);

        // Step 1: Check if the word already exists in the folder onlly
        // Change made here
        const wordExistsadmin = await AdminWord.findOne({
            "folderName" : word
        });

        //Change made here
const wordExistsclient=await ClientWord.findOne({
    "folderName":word
})
console.log("ider tk ho gya")
        if ( wordExistsadmin||wordExistsclient) {
            return res.status(400).json({
                message: `The word '${word}' already exists in the system. Please choose a different word.`
            });
        }

        // Step 2: Check if the folder exists for the admin and levelName
        let clientword = await ClientWord.findOne({
            parentId : req.user.id,
            levelName: levelName,
            "folders.folderName": folderName
        });

        if (clientword) {
            // Folder exists, so push the word into the folder
            clientword = await ClientWord.findOneAndUpdate(
                {
                    parentId: req.user.id,
                    levelName: levelName,
                    "folders.folderName": folderName,
                },
                {
                    $push: { "folders.$.words": { word, wordtype }
                }},
                { new: true }
            );
        } else {
            // Folder doesn't exist, so create a new folder and add the word to it
            clientword = await ClientWord.findOneAndUpdate(
                {
                    parentId: req.user.id,
                    levelName: levelName,
                },
                {
                    $push: {
                        folders: {
                            folderName: folderName,
                            words: [{ word, wordtype}]
                        }
                    }
                },
                { new: true, upsert: true }  // Creates a new document if none exists
            );
        }

        return res.status(200).json({
            message: `The word '${word}' was added successfully.`,
            adminWord: clientword
        });
    } catch (error) {
        // Handle any other errors
        console.error("Error adding word:", error);
        return res.status(500).json({
            message: "An error occurred while adding the word",
            error: error.message
        });
    }
}
const retrivewords = async (req, res) => {
    try {
        const { level } = req.query;

        console.log("Requested level is:", level);

     
        const adminWordsPipeline = [
            { $match: { levelName: level } },
            { 
                $unwind: "$folders"},
            { 
                $unwind: "$folders.words"  },
            { 
                $project: { 
                    word: "$folders.words.word",
                    wordtype: "$folders.words.wordtype", 
                    source: { $literal: 'admin' }  
                } 
            }
        ];

        const clientWordsPipeline = [
            { $match: { parentId: new mongoose.Types.ObjectId(req.user.id), levelName: level } },
            { 
                $unwind: "$folders"  
            },
            { 
                $unwind: "$folders.words"         
            },
            { 
                $project: { 
                    parentId:req.user.id,
                    word: "$folders.words.word",  
                    wordtype: "$folders.words.wordtype",  
                    source: { $literal: 'client' }  
                } 
            }
        ];
        const combinedWords = await Promise.all([
            AdminWord.aggregate(adminWordsPipeline),
            ClientWord.aggregate(clientWordsPipeline)
        ]);
        const flatWords = combinedWords.flat();
        console.log("Combined words:", flatWords);
        return res.status(200).json(flatWords);
    } catch (error) {
        console.error("Error retrieving words:", error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { addAdminWord, addClientword,retrivewords};

