import './styles.scss';
import React from 'react';
import { Alert, Button, Divider,
    Grid, Snackbar, TextField, Typography, useTheme } from '@mui/material';
import Cloud from '../../../components/cloud/cloud';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticateApi, LoginModel } from '../../../api';
import { useTranslation } from 'react-i18next';

interface IProps{
    navigator: any;
    translate: any;
}

interface AuthenticationResponse{
    token: string,
    tokenExpiration: Date
    userID: string
}


interface IState {
    cloudArray: any[];
    loginModel: LoginModel;
    showAlert: any;
  }

  interface AlertInterface{
    isError: boolean,
    content: string
}

class LoginView extends React.Component<IProps, IState> {

    
    handleUserNameChange = ( e: any ) => {
        const newLoginModel = this.state.loginModel;
        newLoginModel.userName = e.target.value;
        this.setState( 
            {
                loginModel: newLoginModel
            }
        );
    };
    
    handlePasswordChange = ( e: any ) => {
        const newLoginModel = this.state.loginModel;
        newLoginModel.password = e.target.value;
        this.setState( 
            {
                loginModel: newLoginModel
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

    async login () {
        const { navigator } = this.props;
        const api = new AuthenticateApi();
        console.log( this.state.loginModel );
        api.apiAuthenticateLoginPost( this.state.loginModel ).then( response => {
            const data = response.data as unknown as AuthenticationResponse;
            console.log( data );
            localStorage.setItem( 'username', this.state.loginModel.userName );
            localStorage.removeItem( 'token' );
            localStorage.removeItem( 'tokenExpiration' );
            localStorage.removeItem( 'userID' );
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'tokenExpiration', data.tokenExpiration.toString() );
            localStorage.setItem( 'userID', data.userID );
            navigator( '/' );
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


    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];

    constructor ( props: any ) {
        super( props );
        this.state = {
            cloudArray: [],
            loginModel: {} as LoginModel,
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
    

    render () {
        const { translate } = this.props;
        return (
            <div className='login-view'>
                <Grid className='login-window' container direction='column'>
                    <div className='login-title'>
                        {translate( 'authorization.login.title' ).toUpperCase()}
                    </div>
                    <Grid className='login-form' container direction='column'
                        justifyContent='space-around' alignItems='stretch'>
                        <TextField className='login-textfield' 
                            label={translate( 'authorization.loginField' )}
                            onChange = {this.handleUserNameChange}>
                        </TextField>    
                        <TextField className='login-textfield'
                            label={translate( 'authorization.passwordField' )} type='password'
                            onChange = {this.handlePasswordChange} >
                        </TextField>    
                        <Grid gap='16px' container direction='column'>
                            <Button className='login-button' onClick={()=> this.login()}>
                                {translate( 'authorization.login.button' ).toUpperCase()}
                            </Button> 
                            <Divider/>
                            <Typography textAlign='center' variant="caption">
                                {translate( 'authorization.login.description' )}
                                <br/> 
                                <Link to='/register'>
                                    {translate( 'authorization.login.description_link' )}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>    
                <div id='login-background'>
                    <div id='login-night'>{this.stars}</div>    
                    <div id='login-day'>{this.state.cloudArray}</div>
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
    const { t } = useTranslation( );

    return <LoginView {...props} navigator={navigator} translate={t}></LoginView>;
}