const { Client, Collection, MessageEmbed} = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "repeat",
    description: "Repeats what you tell it to",
    usage: "<input>",
    run: async (client, message, args) => {
        if(message.deletable) message.delete();

        if(args.length < 1)
          return message.reply("you gone say something nigga?").then(m.delete(5000));
        
        const say = new MessageEmbed()
          .setColor("GOLD")
          .setTitle(message.author.username + " said:")
          .setDescription(args.join(" "))
          .setTimestamp()

      message.channel.send(say);
    }
}