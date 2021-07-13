const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    // Envoie du message
    run: message => {
        let emojis = message.guild.emojis.cache
        .get()
        console.log(emojis)
        let arsenes = message.guild.roles.cache.get('560560928291160105').members.map(m=>m.user);
        let embedMessage = new Discord.MessageEmbed()
            .setTitle('Liste des Arsènes')
            .setColor('#206694')
            .setFooter('Arsène Rivière', 'https://cdn.discordapp.com/app-icons/864039126005579807/2cd6da4813aa7a85a65c728304555fa6.png?size=256')
            .setTimestamp()

        for (let i in arsenes){
            embedMessage.addField(`Arsène Rivière, as ${arsenes[i].username}\n`,`Est un vrai <@&560560928291160105>`)
        }

        message.channel.send(embedMessage)
    },
    // Nom de la commande à appeler
    name: 'liste'
}