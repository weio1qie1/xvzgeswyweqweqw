const {
  Command
} = require('discord.js-commando');
//const request = require('request-promise');
const Roblox = require('roblox-js');
const db = require('quick.db');

module.exports = class VerifyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'verify',
      group: 'verify',
      memberName: 'verify',
      description: 'Verify',
      guarded: true
    });
  }

  async run(msg) {
    if (msg.channel.id !== '503742724890165248') return;

    function giveRoles(id) {
      var maingroup = '4487873'; 
      Roblox.getRankInGroup(maingroup, id)
        .then(function(rank) {
          Roblox.getUsernameFromId(id)
            .then(function(username) {
              if (rank === 0) {
                return verifyMsg.edit('Make sure you join the main group!');
              } else 
              if (rank >= 1) {
                msg.member.addRole(msg.guild.roles.find('name', 'Verified')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'Verification')).catch(console.error); //VERIFIED  
              }
              if (rank === 1) {
                msg.member.setNickname(`[DCLASS] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
              } else
              if (rank === 2) {
                msg.member.setNickname(`[LVl0] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
              } else
              if (rank === 3) {
                msg.member.setNickname(`[LVL1] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
              } else
              if (rank === 4) {
                msg.member.setNickname(`[LVL2] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
              } else
              if (rank === 5) {
                msg.member.setNickname(`[LVL3] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Trainee')).catch(console.error);
                msg.member.removeRole(msg.guild.roles.find('name', 'High Rank')).catch(console.error); //LOW RANKS
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
              msg.member.addRole(msg.guild.roles.find('name', 'Founder')).catch(console.error); //390731491547807745        
            }).catch(function(err) {
              msg.channel.send('Unable to get rank from group');
              console.log(err);
            });
        });
    }

    const verifyMsg = await msg.reply('Checking account info...');
    const userInfo = await db.fetch(`user_${msg.author.id}`);
    if (userInfo !== null) {
      const id = userInfo;
      giveRoles(id);
      return verifyMsg.edit('Your account has already been verified!');
    }

    function makeid() {
      var text = '';
      var words = ['Apple', 'Watch', 'Not', 'Phone', 'Group', 'Green', 'Yellow', 'Watch', 'We', 'Game', 'A', 'Been', 'Info', 'Rank', 'Good', 'New', 'Quick', 'Hi', 'No', 'Yes', 'Star', 'Package', 'United', 'Dog', 'Cool', 'Strange', 'One', 'Town', 'Cow', 'Sky', 'Wonder', 'Divide', 'House', 'Kingdom', 'America', 'Cats', 'Best', 'Palace', 'Ship', 'Army', 'Dark', 'Boss', 'Horse', 'Place', 'Sweet', 'Stairs', 'Night', 'Grass', 'Sun', 'Moon', 'Care', 'Star', 'Earth', 'Ally', 'West', 'Money', 'Diplomat', 'Woof', 'Meow', 'Toy', 'Box', 'Conquest', 'Tiger', 'Battle', 'Attack', 'Tree', 'Apple', 'Door', 'Hero', 'Light', 'Fox', 'Bright', 'Great', 'Bread'];
      var word1 = words[Math.floor(Math.random() * words.length)];
      var word2 = words[Math.floor(Math.random() * words.length)];
      var word3 = words[Math.floor(Math.random() * words.length)];
      var word4 = words[Math.floor(Math.random() * words.length)];
      var word5 = words[Math.floor(Math.random() * words.length)];
      text = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + ' ' + word5;
      return text;
    }
    const text = makeid();
    try {
      verifyMsg.edit('Check your DM\'s!');
      msg.author.send('What is your ROBLOX username?\nExpires in 1 min.').then(() => {
        msg.author.dmChannel.awaitMessages(response => response.content, {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
          .then((collected) => {
            try {
              Roblox.getIdFromUsername(collected.first().content)
                .then(function(id) {
                  try {
                    msg.author.send(`Please update your bio with the following \`${text}\` then confirm the change by replying \`yes\` to this message\nExpires in 3 min.`).then(() => {
                      msg.author.dmChannel.awaitMessages(response => response.content, {
                        max: 1,
                        time: 180000,
                        errors: ['time'],
                      }).then((collected2) => {
                        if (!collected2.first().content === 'yes') return msg.author.send('Verify Canceled');
                        Roblox.getStatus(id)
                          .then(function(blurb) {
                            if (blurb === text) {
                              db.set(`user_${msg.author.id}`, id);
                              const logUser = db.fetch(`user_${msg.author.id}`);
                              msg.author.send('You\'re account has been verified!');
                              verifyMsg.delete();
                              console.log(logUser);
                              giveRoles(id);
                            } else {
                              console.log(text);
                              return msg.author.send('Verifcation Failed. Try again. Code 9');
                            }
                          }).catch(function(err) {
                            msg.author.send('API Error. Code 8');
                            console.log('Code 8 ' + err);
                          });
                      }).catch(function(err) {
                        msg.author.send('Code 7');
                        console.log('Code 7 ' + err);
                      });
                    }).catch(function(err) {
                      msg.auther.send('An error occured. Code 6');
                      console.log('Code 6 ' + err);
                    });

                  } catch (err) {
                    msg.author.send('Failed to get user data from Roblox API. Code 5');
                    console.log('Code 5 ' + err);
                    return verifyMsg.delete();
                  }

                }).catch(function(err) {
                  console.log('Code 4 ' + err);
                  msg.author.send('Failed to get Roblox ID from Username. Make sure you have given a vaild username. Code 4');
                  return verifyMsg.delete();
                });


            } catch (err) {
              console.log('Code 3 ' + err);
              msg.author.send('An error occured while fetching that user\'s data. Code 3');
              return verifyMsg.delete();
            }
            //msg.channel.send(`Your verify code is \`${text}\``);
            //msg.channel.send(`The username message was: ${collected.first().content}`);
          })
          .catch(() => {
            msg.author.send('There was no message sent within the time limit! Code 2');
            return verifyMsg.delete();
          });
      }).catch(() => {
        msg.channel.send('An error occured! This maybe due to your DM\'s being disabled Code 1');
      });
    } catch (e) {
      console.log(e);
      return verifyMsg.edit('An error occured while fetching that user\'s data. Code 0');
    }
  }
};