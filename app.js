require('dotenv').config()
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MongoAdapter = require('@bot-whatsapp/database/mongo')



const { flowWelcome } = require('./scr/flows/welcome-flow')
const { flowBuy } = require('./scr/flows/confirm-buy-flow')

const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: process.env.MONGO_DB_URI,
        dbName: process.env.MONGO_DB_NAME,
    })
    const flows = createFlow([flowWelcome,flowBuy])
    const adapterProvider = createProvider(BaileysProvider)

    const bot = await createBot({
        flow: flows, 
        provider: adapterProvider,
        database: adapterDB,
    })
    
    QRPortalWeb()
    // serverHttp.initialization(bot)
}

main()
