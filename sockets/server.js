const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 3000})

const clients = []

wss.on('connection', (connection) => {
  clients.push(connection)

  connection.on('text', (text) => {
    console.log(text)
  })
})
