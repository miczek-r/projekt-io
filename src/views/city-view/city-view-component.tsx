import './styles.scss';
import WorldTile from '../../components/world-tile/world-tile-component';
import Cloud from '../../components/cloud/cloud';
import React from 'react';
import { Grid, useTheme } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import ReactDOM from 'react-dom';
import { NoEncryption } from '@mui/icons-material';
import { BigField, BigFieldsApi } from '../../api/api';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { minHeight } from '@mui/system';

interface Position{
    x: number;
    y: number;
    scale: number;
}

interface IProps {
    theme: any;
  }

interface IState {
    cloudArray: any[];
    worldTiles: any[];
    pos: Position;
  }

class CityView extends React.Component<IProps, IState> {

    worldTilesLogic: BigField[] = [];
    worldTiles: any = [];
    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];
    
    scrollContainerRef: React.RefObject<HTMLDivElement>;

    constructor ( props: any ) {
        super( props );
        this.state = {
            cloudArray: [],
            worldTiles: [],
            pos: { x: 0, y: 0, scale: 1 }
        };
        this.scrollContainerRef = React.createRef();
        this.getCityData();
        this.loop();
    }

    async getCityData () {
        const cityApi = new BigFieldsApi();
        const userId = localStorage.getItem( 'userID' );
        if ( userId !== null ) {
            cityApi.getBigFieldsListByUserIDIDGet( userId ).then(
                response => {
                    this.worldTilesLogic = response.data;
                    for ( let i = 0; i < this.worldTilesLogic.length; i++ ) {
                        this.worldTiles.push( <WorldTile key={i} 
                            data={this.worldTilesLogic.at( i )!.fields!}
                            style={{ zIndex: 999 - i }}></WorldTile> );
                        this.setState( {
                            worldTiles: this.worldTiles
                        } );
                    }
                }
            );
        }
    }

    setScrollPositionToCenter (): void {
        const node = this.scrollContainerRef.current!;
        const left = ( node.scrollWidth - node.clientWidth ) / 2 ;
        const top = node.scrollHeight / 2;
        console.log( node.scrollWidth, node.clientWidth );
        node.scrollBy( left, top );
    }

    setScrollPosition ( left: number, top: number ): void {
        const node = this.scrollContainerRef.current!;
        console.log( node.scrollLeft * left, node.scrollWidth );
        console.log( top * node.scrollTop, node.scrollHeight );
        //node.scrollBy( node.scrollLeft * left, top * node.scrollTop );
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
        }, 1000 );
    }
    

    previousCloudPosition = 0;

    private randomizeCloudPosition (): number {
        let currentCloudPosition = Math.floor(
            Math.random()
            * ( 3000 * 2 - 3000 / 2 + 1 )
            + 3000 / 2
        );
        if ( Math.abs( currentCloudPosition - this.previousCloudPosition ) < 40 ) {
            currentCloudPosition = this.randomizeCloudPosition();
        }
        this.previousCloudPosition = currentCloudPosition;
        return currentCloudPosition;
    }

    onScroll ( e: React.WheelEvent ) {
        const delta = e.deltaY * -0.01 * 0.1;
        let newScale = this.state.pos.scale + delta;
        if ( newScale < 1 ) {
            newScale = 1;
        }
        if ( newScale > 2 ) {
            newScale = 2;
        }
        this.setState( ( previousState, props ) => ( {
            pos: {
                scale: newScale,
                x: newScale / previousState.pos.scale,
                y: newScale / previousState.pos.scale
            }
            
        } ) );
        this.setScrollPosition( this.state.pos.x, this.state.pos.y );
    }

    render () {
        const { theme } = this.props;
        return (
            <ScrollContainer innerRef={this.scrollContainerRef} 
                vertical horizontal className='city-view' >
                {theme.palette.mode === 'dark' && this.stars}
                <div className="wrapper" ref={this.scrollContainerRef}  
                    onWheel={( e )=>this.onScroll( e )} 
                    style={{
                        transformOrigin: '0 0',
                        transform: `
                            scale(${this.state.pos.scale})`
                    }}>
                    <div className='world' style={{
                        gridTemplateColumns: 'repeat(7,1fr)'
                            
                            
                    }}>
                        {this.state.worldTiles}
                    </div>
                    {this.state.cloudArray}
                </div>
            </ScrollContainer>
        );
    }

}

export default function ( props: any ) {
    const theme = useTheme();

    return <CityView {...props} theme={theme}></CityView>;
}