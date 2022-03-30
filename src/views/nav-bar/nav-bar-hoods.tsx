import { randomInt } from 'crypto';
import { useEffect, useState } from 'react';
import { backgroundMusic } from '../../assets/sounds/background-music';


const handleThemeChange = ( event: { target: { checked: any; };}, setTheme: any ) => {
    const { checked } = event.target;
    if ( checked ) {
        setTheme( 'dark' );
        localStorage.setItem( 'theme', 'dark' );
    } else {
        setTheme( 'light' );
        localStorage.setItem( 'theme', 'light' );
    }
};

const handleLanguageChange = ( event: { target: { checked: any; };} ) => {
    const { checked } = event.target;
    if ( checked ) {
        localStorage.setItem( 'language', 'pl' );
    } else {
        localStorage.setItem( 'language', 'en' );
    }
};

const useAudio = ( url: string ) => {
    const [audio] = useState( new Audio( backgroundMusic[0] ) );
    const [currentSong, setCurrentSong] = useState( 1 );
    const [playing, setPlaying] = useState( false );
  
    const changeSong = () =>{
        setCurrentSong( Math.floor( Math.random() * backgroundMusic.length ) );
        audio.src = backgroundMusic[currentSong];
    }; 

    const toggle = ( play: boolean ) => {
        console.log( 'togglowanie' );
        audio.volume = 0.01;
        changeSong();
        setPlaying( play );
    };

    const startNextSong = () => {
        console.log( 'funkcja' );
        changeSong();
        console.log( 'zmiana' );
        setPlaying( true );
        console.log( 'gra' );
    };
  
    useEffect( () => {
        console.log( url );
        playing ? audio.play() 
            : audio.pause();
    },
    [playing]
    );
  
    useEffect( () => {
        audio.addEventListener( 'ended', () => {
            console.log( 'asd' );
            setPlaying( false );
            startNextSong();
        } );
        return () => {
            audio.removeEventListener( 'ended', () => {
                console.log( 'koniec' );
                setPlaying( false );
            } );
        };
    }, [] );
  
    return [playing, toggle] as const;
};


export { handleThemeChange, handleLanguageChange, useAudio };