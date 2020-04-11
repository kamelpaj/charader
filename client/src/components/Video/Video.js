import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    grid-area: main;
`;

const VideoStream = styled.video`
    width: 100%;
    height: 100%;
`;

const Video = () => {
    const videoStream = useRef(null);

    useEffect(() => {
        if (!videoStream) {
          return
        }
        navigator.mediaDevices.getUserMedia({video:true})
          .then(stream => {
            let video = videoStream.current;
            video.srcObject = stream;
            video.play();
          })
      }, [videoStream]);
    return (
        <VideoContainer>
            <VideoStream ref={videoStream} />
        </VideoContainer>
    )
};

export default Video;