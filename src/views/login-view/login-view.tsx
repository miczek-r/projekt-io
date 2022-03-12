import './styles.scss';
import React from 'react';
import { Button, Divider, Grid, TextField, Typography, useTheme } from '@mui/material';
import Cloud from '../../components/cloud/cloud';
import { Link, useNavigate } from 'react-router-dom';

interface IProps{
    navigator: any;
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
        const { navigator } = this.props;
        return (
            <div className='login-view'>
                <Grid className='login-window' container direction='column'>
                    <div className='login-title'>
                        LOGOWANIE
                    </div>
                    <Grid className='login-form' container direction='column'
                        justifyContent='space-around' alignItems='stretch'>
                        <TextField className='login-textfield' label='Login'></TextField>    
                        <TextField className='login-textfield'
                            label='Hasło' type='password'></TextField>    
                        <Grid gap='16px' container direction='column'>
                            <Button className='login-button' onClick={()=> navigator( '/' )}>
                                ZALOGUJ
                            </Button> 
                            <Divider/>
                            <Typography textAlign='center' variant="caption">
                                Jeśli nie posiadasz jeszcze konta, 
                                <br/> 
                                <Link to='login'>załóż je</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>    
                <div id='login-background'>
                    <div id='login-night'>{this.stars}</div>    
                    <div id='login-day'>{this.state.cloudArray}</div>
                </div>
                
                
            </div>
        );
    }

}


export default function ( props: any ) {
    const navigator = useNavigate();

    return <LoginView {...props} navigator={navigator}></LoginView>;
}