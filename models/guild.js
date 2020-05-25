const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    nigga: {
        default: 0,
        type: Number
    }
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds');