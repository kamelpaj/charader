import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JoinContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    console.log(name)
    return (
        <JoinContainer>
            <h1>Enter a room to play charader!</h1>
            <div><input placeholder="Nickname" type="text" onChange={(event) => setName(event.target.value)}></input></div>
            <div><input placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)}></input></div>

            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type="submit">Join room</button>
            </Link>
        </JoinContainer>
    );
};

export default Join;