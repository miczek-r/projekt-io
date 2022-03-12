import './styles.scss';

import { AppBar, Grid, Switch, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { CustomThemeContext } from '../../utils/providers/custom-theme-provider';
import { useContext } from 'react';
import handleThemeChange from './nav-bar-hoods';

const NavBar = () => {
    const navigator = useNavigate();
    const { currentTheme, setTheme } = useContext( CustomThemeContext );

    return (
        <Grid container direction='column' xs className='nav-bar'>
            <AppBar position="static">
                <Grid container padding='1rem' justifyContent='center' alignItems='center'>
                    <Typography onClick={() => navigator( '/' )}>City</Typography>
                    <Switch onChange={( event )=>handleThemeChange( event, setTheme )}></Switch>
                </Grid>
            </AppBar>
            <Outlet/>
        </Grid>
    
    );
};
export default NavBar;