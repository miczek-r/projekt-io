import { AppBar, Grid, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigator = useNavigate();

    return (
        <div className='nav-bar'>
            <AppBar position="static" className='nav-bar'>
                <Grid container padding='1rem' justifyContent='center' alignItems='center'>
                    <Typography onClick={() => navigator( '/' )}>City</Typography>
                </Grid>
            </AppBar>
            <Outlet/>
        </div>
    
    );
};
export default NavBar;