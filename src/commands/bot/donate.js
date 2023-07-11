const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("KanaChan Patreon")
                .setURL("https://www.patreon.com/kanachanbot")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nClick the button below for the donation page \n**Pay attention! donation is not required**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://www.patreon.com/kanachanbot",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 