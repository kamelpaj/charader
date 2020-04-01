import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("We have a new connection!");

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);


       
    })

    socket.on('disconnect', () => {
        console.log("User left.");
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));