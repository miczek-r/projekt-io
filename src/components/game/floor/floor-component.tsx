import './styles.scss';
import { width } from '@mui/system';
import React from 'react';
import { TryRounded } from '@mui/icons-material';

interface IProp{
    width: number;
    startYPosition: number;
    left: number;
}

class GameFloor extends React.Component<IProp> {

    
    render () {
        return <div className='game-floor'
            style={{ width: this.props.width, left: `${this.props.left}px`,
                bottom: `${this.props.startYPosition.toString()}vh` }}></div>;
    }

}

export default GameFloor;