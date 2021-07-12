const Discord = require('discord.js')

module.exports = {
    // Envoie du message
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Avatar de <@${message.author.id}>`)
            .setImage(message.author.displayAvatarURL())
            .setFooter('Arsène Rivière', 'https://cdn.discordapp.com/app-icons/864039126005579807/2cd6da4813aa7a85a65c728304555fa6.png?size=256')
            .setTimestamp()
        )
    },
    // Nom de la commande à appeler
    name: 'avatar'
}