import { Button } from '@mui/material';
import { useTheme } from '@mui/system';
import { Dir } from 'fs';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import zIndex from '@mui/material/styles/zIndex';
import { Field } from '../../api/api';

interface IProps{
    style: any;
    data: Field[];
}

const WorldTile = ( props: IProps ) => {
    const tiles = 9;
    const tilesArray = [];

    const navigator = useNavigate();
    const theme = useTheme();

    for ( let i = 0;i < tiles;i++ ) {
        tilesArray.push( <div className='sub-tile' key={i}
            style={{
                backgroundColor: theme.palette.mode === 'light' ? '#90be6d' : '#304620',
                zIndex: 999 - i 
            }}
            onClick={() => navigator( `/tile/${props.data.at( i )!.id}` )}>
            {props.data.at( i )!.placedBuilding && <img src={
                require( `../../assets/images/${props.data.at( i )!.placedBuilding!.imageName!}` )
            } style={{ 
                transform: props.data.at( i )!.placedBuilding?.imageName === 'church.png'
                    ? 'rotate(-220deg) skew(7deg) scaleY(1.7) scale(1.4) translate(-34px, 43px)'
                    : 'rotate(-220deg) skew(7deg) scaleY(1.7) scale(1.4) translate(-14px, 31px)',
                filter: theme.palette.mode === 'dark' ? 'brightness(0.3)' : undefined 
            }}></img>}
        </div> );
    }

    return (
        <div className='world-tile' style={{
            backgroundColor: theme.palette.mode === 'light' ? '#4d4d4d' : '#1a1a1a',
            ...props.style
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