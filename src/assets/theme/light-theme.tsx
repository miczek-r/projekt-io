import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const lightTheme = createTheme( {
    palette: {
        primary: {
            main: deepPurple[500]
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
