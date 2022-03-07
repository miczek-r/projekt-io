import { Button } from '@mui/material';
import { useTheme } from '@mui/system';
import { Dir } from 'fs';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const WorldTile = () => {
    const tiles = 9;
    const tilesArray = [];

    const navigator = useNavigate();
    const theme = useTheme();

    for ( let i = 0;i < tiles;i++ ) {
        tilesArray.push( <div className='sub-tile'
            style={{
                backgroundColor: theme.palette.mode === 'light' ? '#90be6d' : '#304620'
            }}
            onClick={() => navigator( '/tile' )}></div> );
    }

    return (
        <div className='world-tile' style={{
            backgroundColor: theme.palette.mode === 'light' ? '#4d4d4d' : '#1a1a1a'
        }}>
            <div className='tile-top'>
                {tilesArray}    
            </div>
            <div className='tile-front' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#BB9981' : '#423024'
            }}></div>
            <div className='tile-side' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#705a57' : '#1d1716'
            }}></div>
        </div>
    );
};

export default WorldTile;