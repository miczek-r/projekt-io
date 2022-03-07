import './styles.scss';

import { AppBar, Grid, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigator = useNavigate();

    return (
        <Grid container direction='column' xs className='nav-bar'>
            <AppBar position="static">
                <Grid container padding='1rem' justifyContent='center' alignItems='center'>
                    <Typography onClick={() => navigator( '/' )}>City</Typography>
                </Grid>
            </AppBar>
            <Outlet/>
        </Grid>
    
    );
};
export default NavBar;