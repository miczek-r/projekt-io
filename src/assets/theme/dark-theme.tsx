import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const darkTheme = createTheme( {
    palette: {
        mode: 'dark'
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

export default darkTheme ;
