const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("mitch")
		.setDescription("Mitch is poggers!"),
	async execute(interaction) {
		return interaction.reply("Mitch = POG!");
	},
};
