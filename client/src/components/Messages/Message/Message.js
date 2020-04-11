import React from 'react';
import ReactEmoji from 'react-emoji';
import styled from 'styled-components';

const MessageBox = styled.div`
    width: 98%;
    padding: 5px 0px 3px 4px;
    background-color: ${props => props.backgroundColor};
`;


const Message = ({ message: {user, text}, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <MessageBox backgroundColor={'rgba(250, 177, 160, 0.2)'}>
                <strong> {trimmedName}: </strong> {ReactEmoji.emojify(text)}
            </MessageBox>
        ) :
        (
            <MessageBox>
                <strong> {user}: </strong> {ReactEmoji.emojify(text)}
            </MessageBox>
        ) 
    )
}

export default Message;