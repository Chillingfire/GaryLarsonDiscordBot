const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!';

client.once('ready', () => {
    console.log('Gary Larson Daily is online!');
});

var quotes = [];

const fs = require('fs');

fs.readFile('farsidequotes.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    data.split(/\n/).forEach(line =>  {
        quotes.push(line);
    });
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    if (command === 'cowtools') {
        message.channel.send("Cow tools");
    }

    if (command === 'cow') {
        message.channel.send("tools");
    }
})

// Bot token:
// client.login('Put token here');

// Heroku token placeholder:
client.login(process.env.DJS_TOKEN);
