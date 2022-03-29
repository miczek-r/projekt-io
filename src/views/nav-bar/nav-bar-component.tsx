import './styles.scss';

import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppBar, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Icon,
    IconButton, Switch, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { CustomThemeContext } from '../../utils/providers/custom-theme-provider';
import { useContext, useEffect } from 'react';
import { handleThemeChange, useAudio } from './nav-bar-hoods';
import React from 'react';
import CustomDrawer from '../../components/custom-drawer/custom-drawer-component';
import { Transition } from 'react-transition-group';
import { Translate, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';
import { backgroundMusic } from '../../assets/sounds/background-music';
import { WelcomeBackDialog } from '../../components/welcome-back-dialog/welcome-back-dialog';
import { UsersProgressInfoesApi } from '../../api';

const NavBar = () => {
    const [open, setOpen] = React.useState( false );
    const [population, setPopulation] = React.useState( 0 );
    const [money, setMoney] = React.useState( 0 );
    const theme = useTheme();
    const navigator = useNavigate();
    const { currentTheme, setTheme } = useContext( CustomThemeContext );
    const fullScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const handleClickOpen = () => {
        setOpen( true );
    };

    const getUserInfo = () =>{
        setPopulation( Number.parseInt( localStorage.getItem( 'population' ) ?? '0' ) );
        setMoney( Number.parseInt( localStorage.getItem( 'money' ) ?? '0' ) );
    };

    useEffect( () => {
        getUserInfo();
    }, [] );
    
    const handleClose = () => {
        setOpen( false );
    };

    const transitions: any = {
       
        entered: {
            transform: 'translateX(0px)'
        },
        
        exited: {
            transform: 'translateX(320px)'
        }
    };

    const logout = ( event: any ) =>{
        event.preventDefault();
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'tokenExpiration' );
        localStorage.removeItem( 'userID' );
        location.reload();
    };

    const [transitionState, setTransitionState] = React.useState( false );
    const [playing, toggle] = useAudio( backgroundMusic[0] );
    

    return (
        <div>
            <Grid container direction='column' className='nav-bar'>
                <AppBar className='nav-bar-app-bar' position="static">
                    <Grid container padding='0.5rem 1rem' columns={3}
                        justifyContent='space-between' alignItems='center'>
                        <Grid container item xs={1} gap='10px' direction='row'>
                            <Grid className='nav-bar-element-background' container direction='row' 
                                justifyContent='end'
                                alignItems='end' gap='1rem' width='auto'>
                                <Icon><GroupsIcon/></Icon>
                                <span>{population}</span>
                            </Grid>
                            <Grid className='nav-bar-element-background' container direction='row' 
                                justifyContent='space-between'
                                alignItems='center' gap='1rem' width='auto'>
                                <Icon><AttachMoneyIcon/></Icon>
                                <div>{money}</div>
                            </Grid>
                        </Grid>
                        <Grid onClick={() => navigator( '/' )} 
                            className='nav-bar-element-background' item
                            container justifyContent='center' xs={1}>
                            <Typography>City</Typography>
                        
                        </Grid>
                        <Grid container justifyContent='end' gap='10px' item xs={1}>
                            <IconButton className='nav-bar-element-icon' 
                                onClick={() => setTransitionState( !transitionState )}>
                                <Icon><ChatIcon/></Icon>
                            </IconButton>
                            <IconButton className='nav-bar-element-icon' onClick={handleClickOpen}>
                                <Icon><SettingsIcon/></Icon>
                            </IconButton>
                            <IconButton className='nav-bar-element-icon'
                                onClick={logout}>
                                <Icon><LogoutIcon/></Icon>
                            </IconButton>
                        
                        </Grid>
                    
                    
                    </Grid>
                </AppBar>
                <Outlet/>
            </Grid>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {'Ustawienia'}
                </DialogTitle>
                <DialogContent>
                    <Grid container flexDirection='column'>
                        <Grid container flexDirection='row' justifyContent='space-between'
                            alignItems='center' >
                        Zmineń motyw: 
                            <Switch 
                                onChange={( event )=>handleThemeChange( event, setTheme )}></Switch>
                        </Grid>
                        <Grid container flexDirection='row' justifyContent='space-between'
                            alignItems='center' >
                        Muzyka:
                            <IconButton className='login-button'
                                onClick= {( event )=>toggle( !playing )}>
                                {playing ? <VolumeUp/> : <VolumeOff/>}
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Transition in={transitionState} timeout={1}>
                {state => 
                    <CustomDrawer style={{
                        transition: 'transform .5s ease-in-out',
                        transform: 'translateX(320px)',
                        ...transitions[state]
                    }}/>
                }
                
            </Transition>
            <WelcomeBackDialog onClose={ () => toggle( true ) }/>
        </div>
    );
};
export default NavBar;