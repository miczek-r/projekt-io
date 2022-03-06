import { createTheme } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';

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
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: 99
                }
            }
        }
    }
} );

export default darkTheme ;
