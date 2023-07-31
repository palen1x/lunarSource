module.exports = {
  name: "guesswhat",
  description: "chicken-huh?",
  devOnly: false,
  // testOnly: Boolean,
  //options: Object[],
  //deleted: Boolean,

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    interaction.editReply(`Chicken Butt 🐔🍑`);
  },
};
