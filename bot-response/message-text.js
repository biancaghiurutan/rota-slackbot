/*------------------
    MESSAGE TEXT
------------------*/

const msgText = {
  createConfirm: (rotation) => {
    return 'The "' + rotation + '" rotation has been created. You can now assign someone to be on-call for this rotation: `@rota "' + rotation + '" assign [@user]`';
  },
  createError: (rotation) => {
    return 'The "' + rotation + '" rotation already exists. You can assign someone to be on-call with `@rota "' + rotation + '" assign [@user]`';
  },
  deleteConfirm: (rotation) => {
    return `The "${rotation}" rotation has been deleted.`;
  },
  deleteError: (rotation) => {
    return `There is no rotation called "${rotation}." Nothing changed.`;
  },
  assignConfirm: (usermention, rotation) => {
    return `:information_desk_person: ${usermention} is now on-call for the "${rotation}" rotation`;
  },
  assignError: (rotation) => {
    return ':shrug: I couldn\'t complete this assignment because the "' + rotation + '" rotation does not exist yet. To create it, use `@rota "' + rotation + '" create [description]`';
  },
  listReport: (list) => {
    let msgStr = '';
    const assignment = (item) => {
      if (item.assigned) {
        return ' (`' + item.assigned + '`)';
      }
      return '';
    };
    for (const rotation in list) {
      msgStr = msgStr + `• *${rotation}*: ${list[rotation].description}${assignment(list[rotation])}\n`;
    }
    return `:clipboard: Here are all the rotations I know about:\n${msgStr}`;
  },
  listEmpty: () => {
    return ':clipboard: There are no rotations saved right now. To create one, tell me `@rota "[rotation-name]" create [description]`';
  },
  whoReport: (usermention, rotation) => {
    return '`' + usermention + '` is on-call for ' + rotation + '. To notify them directly, use: `@rota "' + rotation + ' [message]`';
  },
  whoUnassigned: (rotation) => {
    return 'Nobody is currently assigned to the "' + rotation + '." rotation. To assign someone, use `@rota ' + rotation + ' assign [@user]`.';
  },
  whoError: (err) => {
    return 'An error occurred trying to determine who is on-call:\n```' + JSON.stringify(err) + '```';
  },
  clearConfirm: (rotation) => {
    return `Concierge for "${rotation}" has been unassigned.`;
  },
  clearNoAssignment: (rotation) => {
    return `There is currently nobody assigned to the "${rotation}" rotation. Nothing changed.`;
  },
  confirmChannelMsg: (rotation, sentByUserID) => {
    return `:speech_balloon: The on-call user for "${rotation}" has been notified about <@${sentByUserID}>'s message.`;
  },
  confirmEphemeralMsg: (rotation) => {
    return 'The person currently on-call for "' + rotation + '" will respond at their earliest convenience. Keep in mind: they might be busy or outside working hours.\n:rotating_light: If it\'s *very urgent* and nobody replies within 15 minutes, ping the appropriate `[@usergroup]` or use `@here`.\n:fire: If *it\'s a _huge emergency_*, use `@channel`.';
  },
  noConciergeAssigned: (rotation) => {
    return 'Nobody is currently assigned for "' + rotation + '." To assign someone, use `@rota "' + rotation + '" assign [@user]`.';
  },
  dmToConcierge: (sentByUserID, channelID, link) => {
    return `Hi there! <@${sentByUserID}> needs your attention in <#${channelID}> (${link}) because you're on-call for *${rotation}*."\n\n`;
  },
  error: (err) => {
    return "Sorry, I couldn't do that because an error occurred:\n```" + JSON.stringify(err) + "```";
  }
}

module.exports = msgText;