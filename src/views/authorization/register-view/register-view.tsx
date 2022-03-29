import './styles.scss';
import React, { ChangeEvent } from 'react';
import { Alert, Button, Divider,
    Grid, Snackbar, TextField, Typography, useTheme } from '@mui/material';
import Cloud from '../../../components/cloud/cloud';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticateApi, AuthenticateApiFactory, RegisterModel } from '../../../api/api';

interface IProps{
    navigator: any;
}


interface IState {
    cloudArray: any[];
    registerModel: RegisterModel;
    showAlert: any;
  }

interface AlertInterface{
    isError: boolean,
    content: string
}

class RegisterView extends React.Component<IProps, IState> {


    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];

    constructor ( props: any ) {
        super( props );
        this.state = {
            cloudArray: [],
            registerModel: {} as RegisterModel,
            showAlert: {} as AlertInterface
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

    async register () {
        const api = new AuthenticateApi();
        console.log( this.state.registerModel );
        api.apiAuthenticateRegisterPost( this.state.registerModel ).then( response => {
            this.setState( {
                showAlert: {
                    isError: false,
                    content: 'Pomyślnie zarejestrowano użytkownika.'
                }
            } );
        }
        ).catch( error=>{
            console.log( error );
            this.setState( {
                showAlert: {
                    isError: true,
                    content: error.message
                }
            } );
        } );
    }
    
    handleLoginChange = ( e: any ) => {
        const newRegisterModel = this.state.registerModel;
        newRegisterModel.username = e.target.value;
        this.setState( 
            {
                registerModel: newRegisterModel
            }
        );
    };

    handleEmailChange = ( e: any ) => {
        const newRegisterModel = this.state.registerModel;
        newRegisterModel.email = e.target.value;
        this.setState( 
            {
                registerModel: newRegisterModel
            }
        );
    };

    handlePasswordChange = ( e: any ) => {
        const newRegisterModel = this.state.registerModel;
        newRegisterModel.password = e.target.value;
        this.setState( 
            {
                registerModel: newRegisterModel
            }
        );
    };


    handleClose = ( event?: React.SyntheticEvent | Event, reason?: string ) => {
        this.setState( 
            {
                showAlert: {} as AlertInterface
            }
        );
        console.log( this.state.showAlert );
    };

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
                        <TextField className='login-textfield' label='Login' 
                            onChange={this.handleLoginChange}></TextField>    
                        <TextField className='login-textfield' label='E-mail' type='email'
                            onChange={this.handleEmailChange}>
                        </TextField>   
                        <TextField className='login-textfield'
                            onChange={this.handlePasswordChange}
                            label='Hasło' type='password'></TextField>    
                        <Grid gap='16px' container direction='column'>
                            <Button className='login-button' onClick={()=> this.register()}>
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
                <Snackbar open={this.state.showAlert.content} autoHideDuration={10000} 
                    onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} 
                        severity={this.state.showAlert.isError ? 'error' : 'success'}>
                        {this.state.showAlert.content}
                    </Alert>
                </Snackbar>
                
            </div>
        );
    }

}


export default function ( props: any ) {
    const navigator = useNavigate();

    return <RegisterView {...props} navigator={navigator}></RegisterView>;
}