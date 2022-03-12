import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';

import getTheme from '../../assets/theme/theme-getter';

interface IContextProps {
    currentTheme: string;
    setTheme: ( name: string ) => void;
  }

export const CustomThemeContext = React.createContext( {} as IContextProps );

const CustomThemeProvider = ( props: { children: any; } ) => {
    const { children } = props;
    const currentTheme = localStorage.getItem( 'appTheme' ) || 'light';
    const [themeName, _setThemeName] = useState( currentTheme );
    const theme: Theme = getTheme( themeName );
    const setThemeName = ( name: string ) => {
        localStorage.setItem( 'appTheme', name as string );
        _setThemeName( name );
    };

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName
    };

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export default CustomThemeProvider;