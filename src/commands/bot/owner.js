const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Shvquu`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `shvquu`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Kana-Chan`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Website](${client.config.discord.websiteInvite})`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
