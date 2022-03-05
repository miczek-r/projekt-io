import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, LinearProgress, Switch } from '@mui/material';
import { useContext } from 'react';
import { CustomThemeContext } from '../../utils/providers/custom-theme-provider';
import { handleThemeChange, useCounter } from './home-hook';

const Home = () => {
    const { count, increaseCount, decreaseCount } = useCounter();
    const { currentTheme, setTheme } = useContext( CustomThemeContext );

    return (
        <div>
            <p>{count}</p>
            <div>
                <LinearProgress></LinearProgress>
                <Switch onChange={( event )=>handleThemeChange( event, setTheme )}></Switch>
                <Button variant="outlined" onClick={increaseCount}>Increase</Button>
                <Button variant="text" onClick={decreaseCount}>Decrease</Button>
            </div>
        </div>
    );
};

export default Home;