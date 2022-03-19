const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!';

client.once('ready', () => {
    console.log('Far Side is online!');
});

var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    },
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

    if (command === 'quote') {
        message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    if (command === 'cowtools') {
        message.channel.send("Cow tools");
    }

    if (command === 'comic') {
        (async () => {
            const image_results = await google.scrape('pinterest gary larson', 50);
            message.channel.send(image_results[0].url);
        })();
    }

    if (command === 'help') {
        message.channel.send("Commands:\n\n\"!quote\": Prints random Far Side quote\n\"!comic\": Displays random Far Side comic panel\n\"!cowtools\": Cowtools");
    }
})

// Bot token:
//client.login('token');

// Heroku token placeholder:
client.login(process.env.DJS_TOKEN);
