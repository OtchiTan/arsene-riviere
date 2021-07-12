// Importation des prérequis Discord, du fichier de config et de fs
const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
//  Connexion au bot via son Token
client.login(config.token)
client.commands = new Discord.Collection()

// Récupération de toutes les commandes du dossier ./commands
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

// Détecte dès qu'un message est envoyé
client.on('message', message => {
    // Ne réagis pas si le message est n'est pas envoyer par un utilisateur et qu'il viens du bot
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    // Spilt de la commandes pour en récupérer les arguments
    const args = message.content.trim().split(/ +/g) 

    // Récupération de toute la commande en minuscule
    const commandName = args.shift().toLowerCase()

    // Ne réagis pas si le message ne commence pas par un préfix
    if (!commandName.startsWith(config.prefix)) return

    // Retrait du préfix
    const command = client.commands.get(commandName.slice(config.prefix.length))

    // Ne réagis pas si il ne trouve pas la commande
    if (!command) return

    // Execution de la commande
    command.run(message, args, client)
})

client.on('guildMemberAdd', member =>{
    member.guild.channels.cache.get(config.greetings.channel).send(`${member} installe toi ma couille. Une de plus, on est maintenant **${member.guild.memberCount}**`)
    member.roles.add(config.greetings.role)
})

client.on('guildMemberRemove', member =>{
    member.guild.channels.cache.get(config.greetings.channel).send(`**${member.user.tag}** nous à quitté, une couille de moins, comme Toitoine`)
})