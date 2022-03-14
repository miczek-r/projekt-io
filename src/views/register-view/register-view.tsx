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


class RegisterView extends React.Component<IProps, IState> {

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
            <div className='register-view'>
                <Grid className='register-window' container direction='column'>
                    <div className='register-title'>
                        REJESTRACJA
                    </div>
                    <Grid className='register-form' container direction='column'
                        justifyContent='space-around' alignItems='stretch'>
                        <TextField className='login-textfield' label='Login'></TextField>    
                        <TextField className='login-textfield' label='E-mail' type='email'>
                        </TextField>   
                        <TextField className='login-textfield'
                            label='Hasło' type='password'></TextField>    
                        <Grid gap='16px' container direction='column'>
                            <Button className='login-button' onClick={()=> navigator( '/' )}>
                                 ZAREJESTRUJ
                            </Button> 
                            <Divider/>
                            <Typography textAlign='center' variant="caption">
                                Jeśli masz już konto, 
                                <br/> 
                                <Link to='/login'>zaloguj się</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>    
                <div id='register-background'>
                    <div id='register-night'>{this.stars}</div>    
                    <div id='register-day'>{this.state.cloudArray}</div>
                </div>
                
                
            </div>
        );
    }

}


export default function ( props: any ) {
    const navigator = useNavigate();

    return <RegisterView {...props} navigator={navigator}></RegisterView>;
}