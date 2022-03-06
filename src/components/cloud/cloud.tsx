import './styles.scss';
import React from 'react';

interface IProps{
    startingPosition: number;
}

class Cloud extends React.Component<IProps> {

    render () {
        return <div className='cloud' style={{ 'left': this.props.startingPosition 
        >= window.innerWidth 
            ? window.innerWidth : this.props.startingPosition,
        'bottom': this.props.startingPosition 
        >= window.innerWidth 
            ? this.props.startingPosition - window.innerWidth : -40, 'zIndex': 1 }}>
            <div className='cloud-child'></div>
        </div>;
    }
       
}

export default Cloud;