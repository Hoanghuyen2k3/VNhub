
import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: 'NSnkb1IAjbE', 
        },
    };

    return <YouTube videoId="NSnkb1IAjbE" opts={opts} />;
}

export default VideoPlayer;