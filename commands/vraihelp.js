module.exports = {
    // Envoie du message
    run: message => message.channel.send(`
        **__Les commandes sont :__**
            ::help
            ::vraihelp
            ::liste
    `),
    // Nom de la commande à appeler
    name: 'vraihelp'
}