import { randomInt } from 'crypto';
import { useEffect, useState } from 'react';
import { backgroundMusic } from '../../assets/sounds/background-music';


const handleThemeChange = ( event: { target: { checked: any; };}, setTheme: any ) => {
    const { checked } = event.target;
    if ( checked ) {
        setTheme( 'dark' );
    } else {
        setTheme( 'light' );
    }
};


const useAudio = ( url: string ) => {
    const [audio] = useState( new Audio( backgroundMusic[0] ) );
    const [currentSong, setCurrentSong] = useState( 1 );
    const [playing, setPlaying] = useState( false );
  
    const changeSong = () => audio.src 
    = backgroundMusic[Math.floor( Math.random() * backgroundMusic.length )];

    const toggle = () => {
        audio.volume = 0.01;
        setCurrentSong( currentSong + 1 );
        changeSong();
        setPlaying( !playing );
    };
  
    useEffect( () => {
        console.log( url );
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );
  
    useEffect( () => {
        audio.addEventListener( 'ended', () => toggle() );
        return () => {
            audio.removeEventListener( 'ended', () => setPlaying( false ) );
        };
    }, [] );
  
    return [playing, toggle] as const;
};


export { handleThemeChange, useAudio };