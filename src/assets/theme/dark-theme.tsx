import { createTheme } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import baseTheme from './base-theme';
import { darkBlue } from './colors';

const darkTheme = createTheme( baseTheme, {
    palette: {
        mode: 'dark',
        background: {
            default: darkBlue
        }
    },
    components: {
       
    }
} );

export default darkTheme ;
