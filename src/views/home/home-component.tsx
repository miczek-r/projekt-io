import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, LinearProgress, Switch } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomThemeContext } from '../../utils/providers/custom-theme-provider';
import { handleThemeChange, useCounter } from './home-hook';

const Home = () => {
    const { count, increaseCount, decreaseCount } = useCounter();
    const { currentTheme, setTheme } = useContext( CustomThemeContext );
    const navigate = useNavigate();

    return (
        <div>
            <p>{count}</p>
            <div>
                <LinearProgress></LinearProgress>
                <Button variant="outlined" onClick={() => navigate( '/main' )}>asdfa</Button>
                <Switch onChange={( event )=>handleThemeChange( event, setTheme )}></Switch>
                <Button variant="outlined" onClick={increaseCount}>Increase</Button>
                <Button variant="text" onClick={decreaseCount}>Decrease</Button>
            </div>
        </div>
    );
};

export default Home;