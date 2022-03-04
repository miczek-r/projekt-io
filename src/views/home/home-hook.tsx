import numberWithCommas from './home-helper';
import { useState } from 'react';

const useThemeChange = () =>{
    const [isLightTheme, setState] = useState( true );

    const changeTheme = () => setState( !isLightTheme );

    return {
        isLightTheme: isLightTheme,
        changeTheme
    };
};

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

export { useCounter, useThemeChange };