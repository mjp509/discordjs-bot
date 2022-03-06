const { MessageEmbed } = require("discord.js");

const createEmbedMsg = (title, url, colour, gearScore, weakness, image) => {
  const footerMsg = "MotchBot";
  const footerImg = "https://i.imgur.com/pZlzclz.png";
  const thumbnailImg = "https://i.imgur.com/0qNL7Sk.jpg";

  switch (weakness) {
    case "Water":
      weakness = "💧 Water";
      break;
    case "Fire":
      weakness = "🔥 Fire";
      break;
    case "Earth":
      weakness = "🌍 Earth";
      break;
    case "Lightning":
      weakness = "⚡ Lightning";
      break;
    case "Dark":
      weakness = "🌑 Dark";
      break;
  }

  const embedMsg = new MessageEmbed()
    .setColor(colour)
    .setTitle(title)
    .setURL(url)
    .setThumbnail(thumbnailImg)
    .addFields(
      {
        name: "Minimum Gear Score",
        value: `⚔🛡 ${gearScore}`,
        inline: true,
      },
      {
        name: "Weakness",
        value: weakness,
        inline: true,
      }
    )
    .setImage(image)


  return embedMsg;
};

module.exports = {
  createEmbedMsg: createEmbedMsg,
};
