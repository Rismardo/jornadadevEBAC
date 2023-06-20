import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import "./video.css";
export default Video;

function Video() {
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
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z">
            </video>
            {/*Side Bar*/}
            <VideoFooter />
        </div>
    )
}