import React from 'react';

const InfoBar = ({ room }) => {
    return (
        <div>
            <h3>{room}</h3>
            <a href="/">Leave room</a>
        </div>
    )
};

export default InfoBar;