import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    grid-area: header;
    background-color: #FFDC00;
`;


const RoomHeader = ({ room }) => {
    return (
        <HeaderContainer>
            <h3>{room}</h3>
            <a href="/">Leave room</a>
        </HeaderContainer>
    )
};

export default RoomHeader;