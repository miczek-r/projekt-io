import './styles.scss';
import { Button, Card, Checkbox, Divider, Grid,
    Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import Tile from '../../components/tile/tile-component';
import { Box } from '@mui/system';
import CustomScroll from 'react-custom-scroll';
import { Scrollbar } from 'react-scrollbars-custom';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';


const TileView: React.FunctionComponent = () =>{
    const tiles = 10;
    const tilesArray = [];
    const navigator = useNavigate();


    for ( let i = 0;i < tiles;i++ ) {
        tilesArray.push( <Box className='card'>
            <div className='card-inside-property'>
            BUDYNEK1
                <img src={require( '../../assets/images/home-left.png' )} />
                <Grid container gap='10px' direction='column'>
                    <Grid className='icons' 
                        container direction='row' 
                        justifyContent='space-between'
                        alignItems='center' gap='1rem' width='100%'>
                        <Icon><GroupsIcon/></Icon>
                        <span>10</span>
                    </Grid>
                    <Divider/>
                    <Grid className='icons' 
                        container direction='row' 
                        justifyContent='space-between'
                        alignItems='center' gap='1rem' width='100%'>
                        <Icon><AttachMoneyIcon/></Icon>
                        <div>10</div>
                    </Grid>
                    <Divider/>
                    <Grid className='icons' 
                        container direction='row' 
                        justifyContent='space-between'
                        alignItems='center' gap='1rem' width='100%'
                        style={{ padding: '0', marginTop: '1.25rem' }}>
                        <Button className='login-button' onClick={()=> 
                            navigator( '/' )}
                        style={{ fontSize: '1.8rem', width: '100%' }}>
                     WYBUDUJ
                        </Button> 
                    </Grid>
                </Grid>
            </div>
        </Box> );
    }

    return (        
        <Grid container direction='column' className='tile-view'
            justifyContent='center' alignItems='center'> 
            <Tile></Tile>
            <Card className='menu'>
                <Scrollbar>
                    <Stack alignItems='center' direction="row" spacing={2}>
                        {tilesArray}
                    </Stack>
                </Scrollbar>
            </Card>
        </Grid>
    );
};


export default TileView;