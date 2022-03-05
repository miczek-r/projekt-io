import { Button } from '@mui/material';
import useCounter from './main-screen-hook';
import './styles.scss';

const MainScreen = () => {
    const { count, increaseCounter, decreaseCounter } = useCounter();

    return (
        <div className='main-screen'>
            {count}
            <Button variant='outlined' onDoubleClick={increaseCounter}>Increment</Button>
            <Button variant='contained' onClick={decreaseCounter}>Decrement</Button>
        </div>
    );
};

export default MainScreen;
