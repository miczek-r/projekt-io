import React, { useState } from 'react';

import { Theme, ThemeProvider } from '@mui/material';
import getTheme from '../../assets/theme/base-theme';

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(
    {
        currentTheme: 'light',
        setTheme: null
    }
);

const CustomThemeProvider = ( props: { children: any; } ) => {
    const { children } = props;

    // Read current theme from localStorage or maybe from an api
    const currentTheme = localStorage.getItem( 'appTheme' ) || 'light';

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState( currentTheme );

    // Retrieve the theme object by theme name
    const theme: Theme = getTheme( themeName );

    // Wrap _setThemeName to store new theme names in localStorage
    const setThemeName = ( name: string ) => {
        localStorage.setItem( 'appTheme', name as string );
        _setThemeName( name );
    };

    const contextValue = {
        currentTheme: themeName,
        setTheme: null
    };

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export default CustomThemeProvider;