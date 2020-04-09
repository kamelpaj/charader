import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import styled from 'styled-components';

import RoomHeader from '../RoomHeader/RoomHeader';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Video from '../Video/Video';
import UsersList from '../UsersList/UsersList';

let socket;

const RoomContainer = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1.5fr 8fr 3fr;
    grid-template-rows: 1fr 7fr 2fr;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "sidebar main aside";
    background-color: #fff;
    width: 98%;
    margin: auto;
    box-shadow: 0 5px 20px -5px rgba(50,50,93,.12), 0 3px 4px -2px rgba(0,0,0,.3);
    border-radius: 5px;
`;

const ChatContainer = styled.div`
    grid-area: aside;
    background-color: #85144b;
    position: relative;
`;


const Room = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
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
        <RoomContainer>
            <RoomHeader room={room} />
            <UsersList users={users} />
            <Video />
            <ChatContainer>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </ChatContainer>
        </RoomContainer>
    );
};

export default Room;