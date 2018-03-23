require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

// Commands
const Ping = require('./commands/ping')

client.on('ready', () => {
    client.user.setAvatar(process.env.AVATAR_PATH)
        .catch(console.error)

    client.user.setPresence({ game: { name: process.env.PRESENCE_NAME }, status: process.env.PRESENCE_STATUS })
        .catch(console.error);

    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
    let commandUsed = 
        Ping.parse(message)
})

client.login(process.env.BOT_TOKEN)