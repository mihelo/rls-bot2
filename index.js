const Discord =require(`discord.js`);
const bot = new Discord.Client();

const token = "NzgxMjc3ODUxMTMwNTI3NzQ0.X77Tsw.MIMZMJX3me8x2xwN9M0RdGqHBZQ"

bot.on("ready" , () =>{
    console.log("rls je pod nadzorom");
    bot.user.setActivity("on Real Life Slovenia RP", { type: "PLAYING" }).catch(console.error);

})

bot.on("message", msg=>{
        if (msg.content === "ip") {
            msg.reply("connect 161.97.148.248");
        }
    })

    bot.on("message", msg=>{
        if (msg.content === "pomoč") {
            msg.reply("Če potrebuješ pomoč odpri #ticket");
        }
    })

bot.login(token);