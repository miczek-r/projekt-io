import { createTheme } from '@mui/material';
import baseTheme from './base-theme';
import { lightBlue, red } from './colors';
import darkTheme from './dark-theme';


const lightTheme = createTheme( baseTheme, {
    palette: {
        background: {
            default: lightBlue
        }
    },
    components: {
        
    }

} );

export default lightTheme ;
