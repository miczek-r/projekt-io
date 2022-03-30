import './assets/fonts/iAWriterQuattroS-Regular.woff';
import './assets/fonts/iAWriterQuattroS-Italic.woff';
import './assets/fonts/iAWriterQuattroS-Bold.woff';
import './assets/fonts/iAWriterQuattroS-BoldItalic.woff';
import './global.scss';
import './i18n-initializer';

import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes/routes';
import CustomThemeProvider from './utils/providers/custom-theme-provider';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <CustomThemeProvider>
            <BrowserRouter>    
                <CustomRoutes></CustomRoutes>
            </BrowserRouter>
        </CustomThemeProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
