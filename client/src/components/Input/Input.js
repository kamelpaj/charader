import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 22%;
`;

const ChatInput = styled.input`
    width: 98%;
    font-size: 90%;
    line-height: normal;
    margin: 0;
    border: 1px solid #ccc;
	border-radius: 3px;
	padding: 6px;
    margin-bottom: 8px;
`;

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <InputContainer>
                <ChatInput 
                    type="text" 
                    placeholder="Type a message..." 
                    value={message} onChange={(event) => setMessage(event.target.value)} 
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
                />
        </InputContainer>
    )
};

export default Input;