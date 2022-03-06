const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
	discord_id: {
		type: String,
		required: true,
	},
	character_string: {
		type: String,
		required: true,
	},
	class_type: {
		type: String,
		enum: ["Warrior", "Martial Artist", "Gunner", "Mage", "Assassin"],
		required: true,
	},
	class: {
		type: String,
		enum: ["Berserker", "Paladin", "Gunlancer", "Striker", "Wardancer", "Scrapper", "Soulfist", "Gunslinger", "Artillerist", "Deadeye", "Sharpshooter"],
		required: true,
	},
	gear_score: {
		type: Number,
		required: true,
	},
	guild_status: {
		type: String,
		required: true,
	},
});

mongoose.model("Member", MemberSchema);
