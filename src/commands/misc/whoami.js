module.exports = {
  name: "whoami",
  description: "DADDY-",
  devOnly: true,
  // testOnly: Boolean,
  //options: Object[],
  //deleted: Boolean,

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    interaction.editReply(`<@781972607209439272>, IS MY DADDY 😩`);
  },
};
