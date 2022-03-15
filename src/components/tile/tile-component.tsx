import { useTheme } from '@mui/material';
import './styles.scss';


const Tile = () => {
    const theme = useTheme();
    return (
        <div className='single-tile'>
            <div className='single-tile-top' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#90be6d' : '#304620'
            }}></div>
            <div className='single-tile-front' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#BB9981' : '#423024'
            }}></div>
            <div className='single-tile-side' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#705a57' : '#1d1716'
            }}></div>
        </div>
    );
};

export default Tile;


