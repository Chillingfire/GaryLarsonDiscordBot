const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!';

client.once('ready', () => {
    console.log('Gary Larson Daily is online!');
});

var quotes = ["*\"Well, I'm addicted... Have you tried Carol's sheep dip?\"*",
"*\"Wait a minute! Isn't anyone here a real sheep?\"*",
"*\"And now Edgar's gone... Something's going on around here\"*",
"*\"C'mon, c'mon - it's either one or the other\"*",
"*\"Well, we might as well put it on board - although I'm not sure what use we'll have for a box of rusty nails, broken glass, and throwing darts.\"*",
"*\"Open the gate! It\'s a big weiner dog!\"*",
"*\"Gee whiz... you mean I get a THIRD wish, too?\"*",
"*\"While their owners sleep, nervous little dogs prepare for their day\"*",
"*\"Oh, great! Now there goes my hat!\"*",
"*\"Well, there is some irony in all this, you know... I mean, we both lose a contact at the same time?!\"*",
"*\"Say... wasn\'t there supposed to be a couple of holes punched in this thing?\"*",
"*\"Nothing yet... How about you, Newton?\"*",
"*\"I\'ve got an idea... How many here have ever seen Alfred Hitchcock's The Birds?\"*",
"*\"And now... Can dogs really talk?... We found one who\'s willing to try, right after this message\"*",
"*\"Where the buffalo cruise\"*"]

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
})

client.login(process.env.DJS_TOKEN);