import i18n from 'i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
    en: { translation: en },
    pl: { translation: pl }
} as const;

i18n.use( LanguageDetector )
    .use( initReactI18next )
    .init( {
        fallbackLng: 'en',
        keySeparator: '.',
        lng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources
    } );