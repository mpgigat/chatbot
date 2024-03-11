const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const mainLayer = require("../layers/main.layer");


const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { flowDynamic }) => {
        console.log(ctx.body);
        await flowDynamic(`escribirste ${ctx.body}`)

    })
    .addAction(mainLayer)

module.exports = { flowWelcome }