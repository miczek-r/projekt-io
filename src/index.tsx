import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './views/home/home-component';
import { Button } from '@mui/material';
import { Dir } from 'fs';
import NavBar from './views/nav-bar/nav-bar-component';
import CustomThemeProvider from './utils/providers/custom-theme-provider';


ReactDOM.render(
    <React.StrictMode>
        <CustomThemeProvider>
            <NavBar></NavBar>
            <Home></Home>
        </CustomThemeProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
