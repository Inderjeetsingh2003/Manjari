const mongoose = require('mongoose');

const clientWordSchema = mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    words: [{
        word: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }]
});

const ClientWord = mongoose.model('ClientWord', clientWordSchema);
module.exports = ClientWord;
