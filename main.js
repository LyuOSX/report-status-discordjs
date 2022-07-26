const discord = require('discord.js');
const token = 'yourtoken';
const snekfetch = require('snekfetch');

const client = discord.Client();

client.on('message', async message => {
    if(message.author.bot) return;
  
    if(message.content === ">report") {
        snekfetch.get('https://pastebin.com/raw/yourpastebinlol').then(e => {
            let dfgiij = new discord.MessageEmbed()
            .setTimestamp()
            .setTitle(`M1r3 Cybersec`)
            .setDescription(`
            ${e.body}
            `);
        message.channel.send(dfgiij); 
    })}
});
