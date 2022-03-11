import './styles.scss';
import React from 'react';
import { Button, TextField, useTheme } from '@mui/material';
import Cloud from '../../components/cloud/cloud';

interface IProps{
    theme: any;
}


interface IState {
    cloudArray: any[];
  }


class LoginView extends React.Component<IProps, IState> {

    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];

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
            <div className='login-view'>
                
                {theme.palette.mode === 'dark' && this.stars}
                <div className='login-window'>
                    <div className='login-title'>
                        LOGIN
                    </div>
                    <div className='login-form'>
                        <TextField className='login-textfield'></TextField>    
                        <TextField className='login-textfield'></TextField>    
                        <Button className='login-button'>ZALOGUJ</Button>   
                    </div>
                </div>    
                
                {this.state.cloudArray}
            </div>
        );
    }

}


export default function ( props: any ) {
    const theme = useTheme();

    return <LoginView {...props} theme={theme}></LoginView>;
}