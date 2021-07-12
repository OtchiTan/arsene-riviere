const Discord = require('discord.js')

module.exports = {
    // Envoie du message
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Liste des Arsènes')
            .setColor('#206694')
            .addField(' Arsène Rivière, as **Antoine Le Grand nain**', '*A perdu sa couille trop tôt*')
            .addField(' Arsène Rivière, as **yomantralala**', '*Notre meilleur élement, plus de contact*')
            .addField(' Arsène Rivière, as **Vizz**', '*Probablement en train de faire semblant de travailler*')
            .addField(' Arsène Rivière, as **Pepa Pig**', '*Perd des duel Yu Gi Oh contre lui même*')
            .addField(' Arsène Rivière, as **Otchi**', '*Code ce bot de ses morts*')
            
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