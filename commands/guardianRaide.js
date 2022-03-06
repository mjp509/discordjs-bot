const { SlashCommandBuilder } = require("@discordjs/builders");

const { createEmbedMsg } = require("../helpers/guardianRaidConstructor");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gr")
    .setDescription("Discord frequently asked questions.")
    .addSubcommand((subcommnd) =>
      subcommnd.setName("urnil").setDescription("T1 Urnil Guide"))
    .addSubcommand((subcommnd) =>
      subcommnd.setName("lumerus").setDescription("T1 Lumerus Guide")
    )
    .addSubcommand((subcommnd) =>
      subcommnd.setName("icy_legoros").setDescription("T1 Icy Legoros Guide")
    )
    .addSubcommand((subcommnd) =>
      subcommnd.setName("vertus").setDescription("T1 Vertus Guide")
    ),
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    console.log(interaction.options.getSubcommand());

    // createEmbedMsg = (title, url, colour, gearScore, weakness, image)

    const defaultColour = "#FFD74E";
    const defaultImage = "https://i.imgur.com/BvrUaey.png";
    switch(interaction.options.getSubcommand()){
        case "urnil":
            interaction.channel.send({ embeds: [createEmbedMsg("Urnil Guardian Raide Guide", "https://lost-ark.maxroll.gg/guardian-raids/urnil", defaultColour, 302, "Water", "https://i.imgur.com/pCPQJW2.jpg" )] });
            return interaction.reply({ content: "Urnil Guardian Raide Guide...", ephemeral: true });
        case "lumerus":
            interaction.channel.send({ embeds: [createEmbedMsg("Lumerus Guardian Raide Guide", "https://lost-ark.maxroll.gg/guardian-raids/lumerus", defaultColour, 340, "Dark", "https://i.imgur.com/5OU8ecr.jpg" )] });
            return interaction.reply({ content: "Lumerus Guardian Raide Guide...", ephemeral: true });
        case "icy_legoros":
            interaction.channel.send({ embeds: [createEmbedMsg("Icy Legoros Guaridan Raide Guide", "https://lost-ark.maxroll.gg/guardian-raids/icy-legoros", defaultColour, 380, "Lightning", "https://i.imgur.com/3GCh5OT.jpg" )] });
            return interaction.reply({ content: "Icy Legoros Guardian Raide Guide...", ephemeral: true });
        case "vertus":
            interaction.channel.send({ embeds: [createEmbedMsg("Vertus Guardian Raide Guide", "https://lost-ark.maxroll.gg/guardian-raids/vertus", defaultColour, 420, "Lightning", "https://i.imgur.com/foBOADC.jpg" )] });
            return interaction.reply({ content: "Veruts Guardian Raide Guide...", ephemeral: true });

    }

  },
};
