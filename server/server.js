const path = require('path')
const express = require('express')
// const socket = require('socket.io')
const app = express()
const server = require('http').createServer(app)
// const io = socket(server)

// const socketIO = require('./socket')

// socketIO(io)

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

module.exports = server
