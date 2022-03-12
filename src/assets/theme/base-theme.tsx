import { createTheme } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import { darkBlue, red } from './colors';

const baseTheme = createTheme( {
    palette: {
        primary: {
            main: red
        }
    },
    typography: {
        fontFamily: 'iA Quattro,montserat',
        fontSize: 15
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    transition: 'all 0.2s'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: 99
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '&.login-textfield': {
                        '& fieldset': {
                            'border-radius': '16px',
                            'border-color': 'transparent',
                            'transition': 'border .25s',
                            'background': '#dadada'
                        }
                        
                    }
                }

            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.login-button': {
                        'width': '100%',
                        'background-color': red,
                        'color': 'white',
                        'border-radius': '16px',
                        'padding': '1rem'
                    }
                }
            }
        }
    }
} );

export default baseTheme ;
