import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, LinearProgress } from '@mui/material';
import darkTheme from '../../assets/theme/dark-theme';
import lightTheme from '../../assets/theme/light-theme';
import { useCounter, useThemeChange } from './home-hook';

const Home = () => {
    const { count, increaseCount, decreaseCount } = useCounter();
    const { isLightTheme, changeTheme } = useThemeChange();

    return (
        <div>
            <p>{count}</p>
            <div>
                <LinearProgress></LinearProgress>
                <Button onClick={changeTheme}>{isLightTheme ? 'asdad' : '123'} asd</Button>
                <Button variant="text" onClick={increaseCount}>Increase</Button>
                <Button variant="text" onClick={decreaseCount}>Decrease</Button>
            </div>
        </div>
    );
};

export default Home;