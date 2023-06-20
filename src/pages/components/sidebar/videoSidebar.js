import React, { useState } from 'react';
import "./videoSidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/FavoriteSharp';
import ChatIcon from '@mui/icons-material/ChatSharp';
import ShareIcon from '@mui/icons-material/ShareSharp';

function VideoSidebar({ likes, messages, shares }) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }


    return (
        <div className='videoSidebar'>
            <div
                className='videoSidebar__options'
                onClick={handdleLike}
            >
                {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__options'>
                <ChatIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__options'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}
export default VideoSidebar;