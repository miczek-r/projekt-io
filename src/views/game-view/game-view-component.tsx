import './styles.scss';
import React, { useEffect, useState } from 'react';
import GameFloor from '../../components/game/floor/floor-component';
import ReactDOM from 'react-dom';


// eslint-disable-next-line @typescript-eslint/ban-types
const GameView: React.FunctionComponent = () => {
    let number = 0;
    let widthOfLastElement = 100;

    useEffect( () => {
        const render = () => {
            setTimeout( ()=>{
                const floor 
                = <GameFloor startYPosition={8} 
                    width={widthOfLastElement} left = {number += 1} ></GameFloor>;
                ReactDOM.render( floor, document.getElementById( 'game' ) );
                requestAnimationFrame( render );
                widthOfLastElement = 100;
            }, 10 );
        };
        render();
    }, [] );


    return <div className='game-view'>
        <div id='game'>
            <div> <div className='game-ground'></div>
            </div>
        </div>
    </div>;
};

export default GameView;