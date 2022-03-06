import { createTheme } from '@mui/material';
import { blue, deepPurple, green, red } from '@mui/material/colors';
import { color } from '@mui/system';

const lightTheme = createTheme( {
    palette: {
        primary: {
            main: red[200]
        },
        secondary: {
            main: green[400]
        },
        background: {
            default: blue[100]
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
                    transition: 'all 0.2s',
                    color: green
                }
            }
        }
    }
} );

export default lightTheme ;
