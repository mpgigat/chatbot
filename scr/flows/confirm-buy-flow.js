const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowBuy = addKeyword(EVENTS.ACTION)
    .addAction(async(_,{flowDynamic})=>{
       return await flowDynamic([{ body: "cual es tu nombre" }]);
    })
    .addAction({capture:true},async(ctx,{flowDynamic})=>{
        return await flowDynamic([{ body: `te llamas ${ctx.body}`}]);
    })
   


module.exports = { flowBuy }    