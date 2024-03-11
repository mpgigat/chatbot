const { flowBuy } = require("../flows/confirm-buy-flow");

module.exports = async function (ctx, { state, gotoFlow, extensions }) {
    return gotoFlow(flowBuy)
};