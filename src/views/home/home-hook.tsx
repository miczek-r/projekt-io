import numberWithCommas from './home-helper';
import { useContext, useState } from 'react';
import { CustomThemeContext } from '../../utils/providers/custom-theme-provider';


const useCounter = () => {
    const [count, setCount] = useState( 9999 );

    const increaseCount = () => setCount( count + 1 );
    const decreaseCount = () => setCount( count - 1 );

    return {
        count: numberWithCommas( count ),
        increaseCount,
        decreaseCount
    };
};


const handleThemeChange = ( event: { target: { checked: any; };}, setTheme: any ) => {
    const { checked } = event.target;
    if ( checked ) {
        setTheme( 'dark' );
    } else {
        setTheme( 'light' );
    }
};

export { useCounter, handleThemeChange };