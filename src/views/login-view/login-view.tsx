import './styles.scss';
import React from 'react';
import { useTheme } from '@mui/material';

interface IProps{
    theme: any;
}

class LoginView extends React.Component<IProps> {

    stars = [
        <div id='stars' key='stars'></div>,
        <div id='stars2' key='stars2'></div>,
        <div id='stars3' key='stars3'></div>];

    render () {
        const { theme } = this.props;
        return (
            <div className='login-view'>
                
                {theme.palette.mode === 'dark' && this.stars}
                <div className='login-form'>
                    <div className='login-title'></div>
                </div>    
            </div>
        );
    }

}


export default function ( props: any ) {
    const theme = useTheme();

    return <LoginView {...props} theme={theme}></LoginView>;
}