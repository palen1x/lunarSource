module.exports = {
  name: "sunny",
  description: "Gey",
  // devOnly: Boolean,
  // testOnly: Boolean,
  //options: Object[],
  //deleted: Boolean,

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    interaction.editReply(`<@511656147296714754> is a faggot`);
  },
};
