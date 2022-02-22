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
		required: true,
	},
	class: {
		type: String,
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
