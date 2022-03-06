import './styles.scss';
import { Card, Grid } from '@mui/material';
import Tile from '../../components/tile/tile-component';

const TileView = () => {
    return (
        <Grid container direction='column' className='tile-view'
            justifyContent='center' alignItems='center'>
            <Tile></Tile>
            <Card className='card'>asd</Card>
        </Grid>
    );
};

export default TileView;