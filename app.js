const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { gptTurboEngine } = require('./gpt3-5');
const context = "Eres el bot de whatsapp de Daniel Castiblanco. Comenta que en un momento te atenderá Daniel y mientras el responde, cuenta un chiste."

const main = async () => {
const response = await gptTurboEngine(context)
const flowPrincipal = addKeyword(['hola', 'ole', 'alo']).addAnswer(response);

    const adapterDB = new MockAdapter()

    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
