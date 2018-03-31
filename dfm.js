
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Heil!') {
    	message.reply('Hitler!');
  	}
});

 if (command === 'info') {
        let embed = new Discord.RichEmbed();
        embed.setThumbnail(client.user.avatarURL);
        embed.addField('Users', client.users.size, true);
        embed.addField('Servers', client.guilds.size, true);
        embed.addField('Creator', '<@218397146049806337>', true);
        embed.addField("Invite", 'http://bit.ly/inviteKhanbot', true);
        embed.setColor('#00ffcc');
        message.channel.send({ embed })
 });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
