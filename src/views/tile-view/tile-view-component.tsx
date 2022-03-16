import './styles.scss';
import { Card, Checkbox, Divider, Grid,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
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
            <Card className='menu'>
                <Scrollbar>
                    <Stack alignItems='center' direction="row" spacing={2}>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK1
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK2
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK3
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK4
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK5
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK6
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK7
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK8
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK9
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                        <Box className='card'>
                            <div className='card-inside-property'>
                                BUDYNEK10
                                <img src={require( '../../assets/images/home-left.png' )} />
                                <List>
                                    <ListItem>
                                        <Grid container justifyContent='space-between'>
                                            <ListItemText primary="Bank" secondary='300 dolanów'/>
                                            <ListItemText style={{ textAlign: 'right' }}
                                                primary="2 dolany/s" secondary='na piętro'/>
                                            <ListItemButton style={{ textAlign: 'center' }}>
                                                Wybuduj
                                            </ListItemButton>
                                        </Grid>
                                        
                                    </ListItem>
                                </List>
                            </div>
                        </Box>
                    </Stack>
                </Scrollbar>
            </Card>
        </Grid>
    );
};


export default TileView;