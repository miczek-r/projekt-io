import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState( 0 );

    const increaseCounter = () => setCount( count + 1 );
    const decreaseCounter = () => setCount( count - 1 );

    return {
        count,
        increaseCounter,
        decreaseCounter
    };
};

export default useCounter;