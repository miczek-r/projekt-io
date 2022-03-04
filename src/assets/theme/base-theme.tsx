import { Theme } from '@mui/material';
import darkTheme from './dark-theme';
import lightTheme from './light-theme';

const themes: Map<string, Theme> 
= new Map ( [
    ['light', lightTheme],
    ['dark', darkTheme]
] );

export default function getTheme ( theme: string ): Theme {
    return themes.get( theme ) ?? lightTheme;
}