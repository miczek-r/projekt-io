import './styles.scss';
import WorldTile from '../../components/world-tile/world-tile-component';
import Cloud from '../../components/cloud/cloud';
import React from 'react';

interface IProps {
    test: string;
  }

interface IState {
    cloudArray: any[];
  }

class CityView extends React.Component<IProps, IState> {
    
    constructor ( props: any ) {
        super( props );
        this.state = {
            cloudArray: []
        };
        this.loop();
    }

    loop (): void {
        setTimeout( ()=>{
            this.setState( ( previousState, props ) => ( {
                cloudArray: [...previousState.cloudArray, <Cloud startingPosition={
                    this.randomizeCloudPosition()
                }></Cloud>]
            } ) );
            this.loop();
        }, 5000 );
    }

    previousCloudPosition = 0;

    private randomizeCloudPosition (): number {
        let currentCloudPosition = Math.floor(
            Math.random()
            * ( window.innerWidth * 2 - window.innerWidth / 2 + 1 )
            + window.innerWidth / 2
        );
        if ( Math.abs( currentCloudPosition - this.previousCloudPosition ) < 40 ) {
            currentCloudPosition = this.randomizeCloudPosition();
        }
        this.previousCloudPosition = currentCloudPosition;
        return currentCloudPosition;
    }

    render () {
        return (
            <div className='city-view'>
                <WorldTile></WorldTile>
                {this.state.cloudArray}
            </div>
        );
    }

}

export default CityView;