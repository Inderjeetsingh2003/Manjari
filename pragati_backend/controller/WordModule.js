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

        // Step 1: Check if the word already exists across all admins
        const wordExistsadmin = await AdminWord.findOne({
            "folders.words.word": word
        });
const wordExistsclient=await ClientWord.findOne({
    "folders.words.word":word
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
module.exports = { addAdminWord, addClientword};

