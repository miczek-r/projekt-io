import './styles.scss';
import { Card, Checkbox, Divider, Grid,
    List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import Tile from '../../components/tile/tile-component';
import { Box } from '@mui/system';
import CustomScroll from 'react-custom-scroll';
import { Scrollbar } from 'react-scrollbars-custom';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const TileView: React.FunctionComponent = () =>{
    const navigator = useNavigate();
    return (
        <Grid container direction='column' className='tile-view'
            justifyContent='center' alignItems='center'>
            <Tile></Tile>
            <Card className='card'>
                <Scrollbar style={{ height: '50vh',
                    width: '30vw', minWidth: '400px' }}>
                    <Stack minWidth='300px'>
                        <Grid container justifyContent='center' padding='1rem'>
                            <div>
                    Puste Pole
                            </div>
                        </Grid>
                        <Divider/>
                        <Grid container direction='row' padding='1rem'
                            alignItems='center' justifyContent='space-between'>
                            <div>
                            Ilość mieszkańców
                            </div>
                            <div>
                            10
                            </div>
                        </Grid>
                        <Grid container direction='row' padding='1rem'
                            alignItems='center' justifyContent='space-between'>
                            <div>
                            Dolanów na sekunde
                            </div>
                            <div>
                            10
                            </div>
                        </Grid>
                        <Divider/>
                        <Grid container justifyContent='center' padding='1rem'>
                            <div>
                            Wybuduj
                            </div>
                        </Grid>
                        <List>
                            
                            <ListItemButton component="a" href="#simple-list"
                                onClick={() => navigator( '/game' )}>
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <Grid container justifyContent='space-between'>
                                    <ListItemText primary="Bank" secondary='300 dolanów'/>
                                    <ListItemText style={{ textAlign: 'right' }}
                                        primary="2 dolany/s" secondary='na piętro'/>
                                </Grid>
                            </ListItemButton>
                        </List>
                    </Stack>
                </Scrollbar>
            </Card>
        </Grid>
    );
};


export default TileView;