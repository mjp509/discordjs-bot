const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const setUpCommands = () => {
	return new Promise((resolve, reject) => {
		const commands = [];
		const commandFiles = fs
			.readdirSync("./commands")
			.filter((file) => file.endsWith(".js"));

		for (const file of commandFiles) {
			const command = require(`./commands/${file}`);
			commands.push(command.data.toJSON());
		}

		const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

		rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT,
				process.env.GUILD
			),
			{ body: commands }
		)
			.then(() => {
				resolve(true);
			})
			.catch((error) => {
				console.error(error);
				reject(error);
			});
	});
};

module.exports = {
	setUpCommands: setUpCommands,
};
