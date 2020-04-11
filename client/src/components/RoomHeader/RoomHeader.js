import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    grid-area: header;
    text-align: center;
`;

const BackLink = styled.a`
    text-decoration: none;
    color: #000000;
    transition: all .15s ease-out;

    &:hover {
        background-color: rgba(250, 177, 160, 0.2);
        cursor: pointer;
    }
`;

const RoomHeader = ({ room }) => {
    return (
        <HeaderContainer>
            <h1>{room}</h1>
            <BackLink href="/"> Leave room </BackLink>
        </HeaderContainer>
    )
};

export default RoomHeader;