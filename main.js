const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!';

client.once('ready', () => {
    console.log('Gary Larson Daily is online!');
});

const quotes = ["*\"Well, I'm addicted... Have you tried Carol's sheep dip?\"*",
"*\"Wait a minute! Isn't anyone here a real sheep?\"*",
"*\"And now Edgar's gone... Something's going on around here\"*",
"*\"C'mon, c'mon - it's either one or the other\"*",
"*\"Well, we might as well put it on board - although I'm not sure what use we'll have for a box of rusty nails, broken glass, and throwing darts.\"*"]

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'bing') {
        message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
    }
})

client.login('OTQyNjEzNjczOTkyNjU0ODk4.YgnDZA.SBmKUdLyIJSnyRPjv_Fg_gb2jOc');