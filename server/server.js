const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
const mongoose = require('mongoose');

let server = http.createServer(app);

let io = socketIO(server);

module.exports = { io };

require('./sockets/sockets')

mongoose.connect('mongodb://localhost:27017/mean', (err) => {
    if (err) throw err;
    console.log('BASE DE DATOS ONLINE');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());



app.use(express.static(path.resolve(__dirname, '../public')));
// app.use(express.static(path.resolve(__dirname, './../../TodoList/dist/ftsock')));

app.use(require('./routes/usuarios'));

server.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});