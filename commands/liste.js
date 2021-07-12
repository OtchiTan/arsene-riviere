const Discord = require('discord.js')

const arsenesId = [241198550376120320,318141950467244032,386923056234233856,223888076445843456,179656990371479552]
let arsenes = []
for (let i in arsenes){
    arsenes.push(client.users.cache.find(user => user.id === arsenesId[i]))
}


module.exports = {
    // Envoie du message
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Liste des Arsènes')
            .setColor('#206694')
            .addField(`Arsène Rivière, as **${arsenes[0].username}**`, '*A perdu sa couille trop tôt*')
            .addField(`Arsène Rivière, as **${arsenes[1].username}**`, '*Notre meilleur élement, plus de contact*')
            .addField(`Arsène Rivière, as **${arsenes[2].username}**`, '*Probablement en train de faire semblant de travailler*')
            .addField(`Arsène Rivière, as **${arsenes[3].username}**`, '*Perd des duel Yu Gi Oh contre lui même*')
            .addField(`Arsène Rivière, as **${arsenes[4].username}**`, '*Code ce bot de ses morts*')
            
            .setDescription(`
                [Nous retrouver](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
                [Nous retrouver vraiment](https://www.twitch.tv/vizz_live)
            `)

            .setFooter('Arsène Rivière', 'https://cdn.discordapp.com/app-icons/864039126005579807/2cd6da4813aa7a85a65c728304555fa6.png?size=256')
            .setTimestamp()
        )
    },
    // Nom de la commande à appeler
    name: 'liste'
}