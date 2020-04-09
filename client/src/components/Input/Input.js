import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    position: absolute;
    bottom: 0;
`;

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <InputContainer>
            <form>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={message} onChange={(event) => setMessage(event.target.value)} 
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
                />
                
                <button onClick={(event) => sendMessage(event)}> Send </button>
            </form>
        </InputContainer>
    )
};

export default Input;