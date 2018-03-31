const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Heil!') {
    	message.reply('HEIL HITLER!');
  	}
});

client.on('message', message => {
    if (message.content === 'Heil!') {
    	message.reply('Dobra, już sklej pizde');
  	}
});

client.on('message', message => {
    if (message.content === 'info') {
    	message.reply('Właśnie rucham ci starą');
  	}
});

client.on('message', message => {
    if (message.content === 'Spierdalaj') {
    	message.reply('Luzuj suty XDDDDDD');
  	}
});

client.on('message', message => {
    if (message.content === 'Japierdole') {
    	message.reply('https://i.pinimg.com/736x/47/45/98/47459881654dacb329ba729f04011c26.jpg');

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
