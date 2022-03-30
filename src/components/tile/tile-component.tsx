import { useTheme } from '@mui/material';
import './styles.scss';


const Tile = ( { imageName }: any ) => {
    const theme = useTheme();
    return (
        <div className='single-tile'>
            <div className='single-tile-top' style={{
                backgroundColor: theme.palette.mode === 'light' ? '#90be6d' : '#304620'
            }}>
                {imageName && <img src={
                    require( `../../assets/images/${imageName}` )
                } style={{ 
                    transform: imageName === 'church.png'
                        ? `rotate(-220deg) skew(7deg)
                         scaleY(1.7) scale(1.4) translate(-46px, 59px)` 
                        : `rotate(-220deg) skew(7deg)
                         scaleY(1.7) scale(1.4) translate(-21px, 44px)`
                    ,
                    filter: theme.palette.mode === 'dark' ? 'brightness(0.3)' : undefined 
                }}></img>}
            </div>
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