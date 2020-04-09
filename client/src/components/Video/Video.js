import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    grid-area: main;
    background-color: #FF4136;
`;

const Video = () => {
    return (
        <VideoContainer>
            Här ska video synas!
        </VideoContainer>
    )
};

export default Video;