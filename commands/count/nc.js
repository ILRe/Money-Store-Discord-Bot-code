const { Client, Collection, MessageEmbed} = require("discord.js");
const Guild = require('../../models/guild');

module.exports = {
    name: "nc",
    category: "count",
    description: "Counts how many times people have said nigga",
    run: async (client, message, args) => {
        if(message.deletable) message.delete();

        const word = await Guild.findOne({ guildID: message.guild.id });

        const countResult = new MessageEmbed()
          .setColor("GOLD")
          .setTitle(message.author.username + " requested the count!")
          .setDescription(word.nigga)
          .setTimestamp()

      message.channel.send(countResult);
    }
}