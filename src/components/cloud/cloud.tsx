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
            <div className='cloud-child'
                style={{
                    'width': Math.floor(
                        Math.random()
                        * ( 150 - 50 )
                        + 50
                    ),
                    'height': Math.floor(
                        Math.random()
                        * ( 150 - 50 )
                        + 50
                    )
                }}
            
            ></div>
        </div>;
    }
       
}

export default Cloud;