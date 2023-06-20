import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNoteSharp';

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@Rismardo</h3>
                <p>Descrição do Video</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooterMusic__text'>
                        <p>Titulo da Música</p>
                    </div>
                </div>
            </div>
            <img
                className='videoFooter__record'
                alt='Imagem de um vinil girando'
                src='./vinil.png'
            />
        </div>
    )
}
export default VideoFooter;
