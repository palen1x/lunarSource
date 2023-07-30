const {
  SlashCommandBuilder,
  EmbedBuilder,
  Embed,
  AttachmentBuilder,
} = require("discord.js");
const susIMG = "https://i.imgur.com/sEj6b8r.jpg";
const attachment = new AttachmentBuilder("C:Users/mromi/OneDrive/Desktop", {
  name: "sus.jpg",
});

module.exports = {
  name: "sus",
  description: "lol",
  // devOnly: Boolean,
  // testOnly: Boolean,
  //options: Object[],
  //deleted: Boolean,

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    interaction.editReply({ files: [susIMG] });
  },
};
