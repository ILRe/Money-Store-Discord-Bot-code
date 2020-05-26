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

    if((message.content.toLowerCase().includes('shut up'))  || (message.content.toLowerCase().includes('stfu')) || (message.content.toLowerCase().includes('shut the fuck up')) || (message.content.toLowerCase().toString() === "shut up") || (message.content.toLowerCase().toString() === "stfu") || (message.content.toLowerCase().toString() === "shut the fuck up")) return message.channel.send(`@${message.author.username} you shut the fuck up`);

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