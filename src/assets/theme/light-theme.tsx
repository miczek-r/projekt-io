import { createTheme } from '@mui/material';
import { deepPurple, green, red } from '@mui/material/colors';

const lightTheme = createTheme( {
    palette: {
        primary: {
            main: red[200]
        },
        secondary: {
            main: green[400]
        }
    },
    typography: {
        fontFamily: 'Fipps,iA Quattro',
        fontSize: 15
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    transition: 'all 0.2s'
                }
            }
        }
    }
} );

export default lightTheme ;
