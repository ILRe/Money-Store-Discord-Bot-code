const fs = require('fs');
const Guild = require('../../models/guild');

module.exports = async (client, message) => {
    const prefix = "*";

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    /****************
     *              *
     *  WORD COUNT  *
     *              *
     ****************/

     //Word = nigga

    if(message.content.toLowerCase().includes("nigga") || message.content.toLowerCase().includes("nigger")){

        let word = await Guild.findOne({ guildID: message.guild.id });

        word.nigga++;

        let wordUpdate = await Guild.findOneAndUpdate({ guildID: message.guild.id }, {$set: {nigga: word.nigga} }, { new: true });

        console.log(`count updated to ${wordUpdate.nigga} for ${wordUpdate.guildName}`);

    }

    /********************
     *                  *
     *  Phrase Listen   *
     *                  *
     ********************/

    if(message.content.toLowerCase().toString() === "fuck") return message.channel.send("fuck indeed");

    if(message.content.toLowerCase().includes("vai")) return message.channel.send("I strongly advise you to refrain from using master's name and instead refer to him as master or daddy 🤤😛😝🥰");

    if (cmd.length === 0) return;

    /********************
     *                  *
     *  Command Setup   *
     *                  *
     ********************/

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
}