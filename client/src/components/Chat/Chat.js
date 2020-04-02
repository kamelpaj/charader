import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        // Mounting the component
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)
        
        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        return () => {
            // Unmounting the component
            socket.emit('disconnect');
            socket.off();
        }
        
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })

        
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages)
    console.log('users: ', users)
    return (
        <div>
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    );
};

export default Chat;