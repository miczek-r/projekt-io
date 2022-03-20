import './styles.scss';
import WorldTile from '../../components/world-tile/world-tile-component';
import Cloud from '../../components/cloud/cloud';
import React from 'react';
import { Grid, useTheme } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import ReactDOM from 'react-dom';

interface IProps {
    theme: any;
  }

interface IState {
    cloudArray: any[];
  }

class CityView extends React.Component<IProps, IState> {

    worldTiles: any = [];
    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];
    
    constructor ( props: any ) {
        super( props );
        this.state = {
            cloudArray: []
        };
        for ( let i = 0;i < 5 * 5;i++ ) {
            this.worldTiles.push( <WorldTile zIndex={999 - i}></WorldTile> );
        }
        this.loop();
    }

    setScrollPositionToCenter (): void {
        const node = ReactDOM.findDOMNode( this ) as Element;
        const left = ( node.scrollWidth - node.clientWidth ) / 2 ;
        const top = ( node.scrollWidth - node.clientHeight ) / 2;
        console.log( node.scrollWidth, node.clientWidth );
        node.scrollBy( left, top );
    }

    componentDidMount () {
        this.setScrollPositionToCenter();
    }

    loop (): void {
        setTimeout( ()=>{
            this.setState( ( previousState, props ) => ( {
                cloudArray: [...previousState.cloudArray, <Cloud startingPosition={
                    this.randomizeCloudPosition()
                }></Cloud>]
            } ) );
            this.loop();
        }, 10000 );
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
        const { theme } = this.props;
        return (
            <ScrollContainer vertical horizontal className='city-view'>
                {theme.palette.mode === 'dark' && this.stars}
                <div className="wrapper">
                    <div className='world' style={{
                        gridTemplateColumns: 'repeat(5,1fr)'
                    }}>
                        {this.worldTiles}
                    </div>
                </div>
                {this.state.cloudArray}
            </ScrollContainer>
           
        );
    }

}

export default function ( props: any ) {
    const theme = useTheme();

    return <CityView {...props} theme={theme}></CityView>;
}