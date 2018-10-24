const {
    Command
  } = require('discord.js-commando');
  //const request = require('request-promise');
  const Roblox = require('roblox-js');
  const db = require('quick.db');

  module.exports = class UpdateCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'update',
        group: 'update',
        memberName: 'update',
        description: 'Update',
        guarded: true
      });
    }
  
    async run(msg) {
      if (msg.channel.id !== '503740125881171980') return;
  
      function giveRoles(id) {
        var maingroup = '4487873'; 
        Roblox.getRankInGroup(maingroup, id)
          .then(function(rank) {
            Roblox.getUsernameFromId(id)
              .then(function(username) {
                if (rank === 0) {
                  msg.member.setNickname(`${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Verification')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'Verified'));
                  msg.member.removeRole(msg.guild.roles.find('name', 'Trainee'));
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank'));
                  return msg.author.send('Make sure you join the group! https://www.roblox.com/my/groups.aspx?gid=4487873');
                } else 
                if (rank === 1) {
                  msg.member.setNickname(`[DCLASS] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')); //LOW RANKS
                } else
                if (rank === 2) {
                  msg.member.setNickname(`[LVL0] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')); //LOW RANKS
                } else
                if (rank === 3) {
                  msg.member.setNickname(`[LVL1] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')); //LOW RANKS
                } else
                if (rank === 4) {
                  msg.member.setNickname(`[LVL2] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')); //LOW RANKS
                } else
                if (rank === 5) {
                  msg.member.setNickname(`[LVL3] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                  msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')); //LOW RANKS
                } else
                if (rank === 6) {
                  msg.member.setNickname(`[LVL4] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
                } else
                if (rank === 7) {
                  msg.member.setNickname(`[O5C] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
                } else
                if (rank === 8) {
                  msg.member.setNickname(`[SD] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //ALLY
                } else
                if (rank === 9) {
                  msg.member.setNickname(`[ADMIN] ${username}`);
                  msg.member.addRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //MIDDLE RANKS
                } else
                if (rank === 255) {
                  try {
                    msg.member.setNickname(`[FOUNDER] ${username}`);
                  } catch (e) {
                    console.log('USERISOWNER');
                  }
                  msg.member.addRole(msg.guild.roles.find('name', 'Founder')).catch(console.error); //CHIEF RANKS
                } else
                if (rank > 255) {
                  verifyMsg.edit('Rank is above 255. This is not normal.');
                }
              }).catch(function(err) {
                msg.channel.send('Unable to get rank from group');
                console.log(err);
              });
  
  
            var group8 = '0000000'; //RGG
            Roblox.getRankInGroup(group8, id)
              .then(function(rank) {
                if (rank === 0) return;
                if (rank > 255) return;
                msg.member.addRole('390731491547807745'); //390731491547807745        
              }).catch(function(err) {
                msg.channel.send('Unable to get rank from group');
                console.log(err);
              });
          });
      }
      const userInfo = await db.fetch(`user_${msg.author.id}`);
      if (userInfo !== null) {
        const id = userInfo;
        giveRoles(id);
      }
    }
  };