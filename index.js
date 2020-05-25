const { Client, Collection, MessageEmbed } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const client = new Client();

["commands", "aliases"].forEach(x => client[x] = new Collection());

client.mongoose = require('./utils/mongoose');

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command", "event"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.mongoose.init();
client.login(process.env.TOKEN);