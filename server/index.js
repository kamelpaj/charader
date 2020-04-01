import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import { addUser, removeUser, getUser, GetUsersInRoom } from './users'
import router from './router';

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("We have a new connection!");
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `Welcome to the room, ${user.name}!` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` })

        socket.join(user.room);
       
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log("User left.");
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));