const {
  Client,
  Interaction,
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */

  callback: async (client, interaction) => {
    const targetUserId = interaction.options.get("target-user").value;
    const reason =
      interaction.options.get("reason")?.value || "No reason provided";

    await interaction.deferReply();

    const targetUser = await interaction.guild.members.fetch(targetUserId);

    if (!targetUser) {
      await interaction.editReply("That user doesnt exist in this server.");
      return;
    }

    if (targetUser.id === interaction.guild.ownerId) {
      await interaction.editReply(
        "You cannot ban that user because they are the server owner."
      );
      return;
    }

    const targetUserRolePosition = targetUser.roles.highest.position; // Hihgest role of target-user
    const requestUserRolePermission = interaction.member.roles.highest.position; // Highest role of the user who executes the command
    const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest roles of the bot

    if (targetUserRolePosition >= requestUserRolePermission) {
      await interaction.editReply(
        "You can't ban that user as their roles are equal to or greater than your own."
      );
      return;
    }

    if (targetUserRolePosition >= botRolePosition) {
      await interaction.editReply(
        "I cant ban that user as they have a role equal to or greater than mine."
      );
      return;
    }

    //this will actually ban the user
    try {
      await targetUser.ban({ reason });
      await interaction.editReply(
        `User ${targetUser} has been banned\nReason: ${reason}`
      );
    } catch (error) {
      console.log(`There was an error when banning: ${error}`);
    }
  },

  name: "ban",
  description: "Bans a member from the server.",
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: "target-user",
      description: "The user you would like to ban.",
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: "reason",
      description: "The reason for banning.",
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.BanMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],
};
