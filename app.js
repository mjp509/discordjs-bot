// ######### Load Modules Start #########
const fs = require("fs");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const path = require("path");
const initCommands = require("./deployCommands");
dotenv.config();
// ######### Load Modules End #########

// ######### Express Start #########
app.get("/", (req, res) => {
	res.send("Lost Ark Discord Bot");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});

// --- favicon ---
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// --- express body parser ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- static folder(s) ---
app.use(express.static(path.join(__dirname, "public")));
// ######### Express End #########

// ######### Commands Start #########
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once("ready", () => {
	console.log("Bot connected...");
});

initCommands
	.setUpCommands()
	.then(() => {
		console.log("Commands set up...");
	})
	.catch((error) => {
		console.error(error);
	});

// ######### Commands End #########

// ######### Command Loop Start #########
client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);
	console.log(command);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});
// ######### Command Loop Stop #########

client.login(process.env.TOKEN);
