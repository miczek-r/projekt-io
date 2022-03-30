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
import { handleLanguageChange, handleThemeChange, useAudio } from './nav-bar-hoods';
import React from 'react';
import CustomDrawer from '../../components/custom-drawer/custom-drawer-component';
import { Transition } from 'react-transition-group';
import { Translate, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';
import { backgroundMusic } from '../../assets/sounds/background-music';
import { WelcomeBackDialog } from '../../components/welcome-back-dialog/welcome-back-dialog';
import { UsersProgressInfoesApi } from '../../api';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [open, setOpen] = React.useState( false );
    const [population, setPopulation] = React.useState( 0 );
    const [money, setMoney] = React.useState( 0 );
    const theme = useTheme();
    const navigator = useNavigate();
    const { t, i18n } = useTranslation();
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

    const changeLanguage = ( event: any ) => {
        const { checked } = event.target;
        if ( localStorage.getItem( 'language' ) === 'en' ) {
            i18n.changeLanguage( 'pl' );
            localStorage.setItem( 'language', 'pl' );
        } else {
            i18n.changeLanguage( 'en' );
            localStorage.setItem( 'language', 'en' );
        }
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
                            <Typography>{t( 'city.label', 
                                { whos: localStorage.getItem( 'username' ) }
                            )}</Typography>
                        
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
                            {localStorage.getItem( 'theme' ) === 'dark'
                                ? t( 'settings.darkTheme' ) 
                                : t( 'settings.lightTheme' )} 
                            <Switch 
                                checked={localStorage.getItem( 'theme' ) === 'dark' ? true : false}
                                onChange={( event )=>handleThemeChange( event, setTheme )}></Switch>
                                
                        </Grid>
                        <Grid container flexDirection='row' justifyContent='space-between'
                            alignItems='center' >
                            {t( 'settings.music' )}:
                            <IconButton className='login-button'
                                onClick= {( event )=>toggle( !playing )}>
                                {playing ? <VolumeUp/> : <VolumeOff/>}
                            </IconButton>
                        </Grid>
                        <Grid container flexDirection='row' justifyContent='space-between'
                            alignItems='center' >
                            {localStorage.getItem( 'language' ) === 'en'
                                ? t( 'settings.english' ) 
                                : t( 'settings.polish' )} 
                            <Switch 
                                checked={localStorage.getItem( 'language' ) === 'en' 
                                    ? true : false}
                                onChange={
                                    ( event )=> {
                                        changeLanguage( event );
                                    }
                                }></Switch>
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