import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const lightTheme = createTheme( {
    palette: {
        primary: {
            main: deepPurple[500]
        }
    },
    typography: {
        fontFamily: 'Times New Roman',
        fontSize: 15
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    transition: 'all 0.25s'
                }
            }
        }
    }
} );

export default lightTheme ;
