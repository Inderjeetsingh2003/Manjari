const mongoose = require('mongoose');

const adminwordSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Types.ObjectId,
    ref: "admin",
    required: true,  // Ensure an adminId is provided
  },
  levelName: {
    type: String,
    required: true,  // Levels like "Easy", "Moderate", "Hard"
    enum: ["Easy", "Moderate", "Hard"],  // Can enforce specific values
  },
  folders: [
    {
      folderName: {
        type: String,
        required: true,  // Folder name must be provided (e.g., "About Me", "Eat")
      },
      words: [
        {
          word: {
            type: String,
            required: true,  // The word must be provided
            unique:true
          },
          wordtype: { // noun, etc
            type: String, 
            required: true,  // URL to the pronunciation audio
          },
          photourl:{
            type:String,
            default:"here is word picture url"
          },
          addedBy: {
            type: String,
         
            default:"admin" , // Ensure it’s either added by admin or parent
           // Always specify who added the word
          },
          createdAt: {
            type: Date,
            default: Date.now,  // Automatically sets the date when the word was added
          }
        }
      ]
    }
  ]
});





const clientWordSchema = mongoose.Schema({
  parentId: {
    type: mongoose.Types.ObjectId,
    ref: "client",
    required: true  // Ensure that the parent (client) is linked
  },
  levelName: {
    type: String,
    required: true,  // Levels like "Easy", "Moderate", "Hard"
    enum: ["Easy", "Moderate", "Hard"],  // You can enforce specific values
  },
  folders: [
    {
      folderName: {
        type: String,
        required: true  // Folder name must be provided (e.g., "About Me", "Eat")
      },
      words: [
        {
          word: {
            type: String,
            required: true  // Word is mandatory
          },
          wordtype: {
            type: String,
            required: true 
          },
          addedBy: {
            type: String,
         
            default:"parent" , // Ensure it’s either added by admin or parent
     
          },
          createdAt: {
            type: Date,
            default: Date.now  // Automatically sets the timestamp when the word was added
          },
         
        }
      ]
    }
  ]
});

const ClientWord = mongoose.model('ClientWord', clientWordSchema);
const AdminWord = mongoose.model('AdminWord', adminwordSchema);
module.exports ={ AdminWord,ClientWord};
