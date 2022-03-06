import { Button } from '@mui/material';
import { Dir } from 'fs';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const WorldTile = () => {
    const tiles = 9;
    const tilesArray = [];

    const navigator = useNavigate();

    for ( let i = 0;i < tiles;i++ ) {
        tilesArray.push( <div className='sub-tile' onClick={() => navigator( '/tile' )}></div> );
    }

    return (
        <div className='world-tile'>
            <div className='tile-top'>
                {tilesArray}    
            </div>
            <div className='tile-front'></div>
            <div className='tile-side'></div>
        </div>
    );
};

export default WorldTile;