const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { gptTurboEngine } = require('./gpt3-5');
const context = "Eres el bot de whatsapp de SUMA. (SUMA: es una app de gestión de incidentes para proveerdores de servicios de tecnología) Comenta sobre SUMA y su creación de incidentes"

const main = async () => {
    const response = await gptTurboEngine(context)
    const flowPrincipal = addKeyword(['Hola', 'hola']).addAnswer(response);

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
