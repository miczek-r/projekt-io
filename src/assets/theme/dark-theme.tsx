import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const darkTheme = createTheme( {
    palette: {
        mode: 'dark'
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
        }
    }
} );

export default darkTheme ;
