import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import "./video.css";
import VideoSidebar from './components/sidebar/videoSidebar';
export default Video;

function Video({ likes, messages, shares, name, description, music, url }) {
    /* Definindo Pause e Play por cliques */
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }
    return (
        <div className="video__player">
            <video className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src={url}>
            </video>
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}