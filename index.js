const { withHermes } = require ('hermes-javascript')

withHermes (hermes => {
    const dialog = hermes.dialog()

    dialog.flow ('dixon415:turnLightsOn', (msg, flow) => {
        console.log(msg)
        flow.end()
        return "Ok, let there be light"
    })

    dialog.flow ('dixon415:setColor', (msg, flow) => {
        console.log(msg)
        flow.end()
        return "Ok, let's change color to " + msg.slots[0].value.value
    })
})