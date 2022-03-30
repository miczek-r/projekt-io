import { Dialog, DialogActions, 
    DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { handleThemeChange } from '../../views/nav-bar/nav-bar-hoods';

interface IProps{
    onClose: () => void
}

export const WelcomeBackDialog = ( props: IProps ) => {
    const [open, setOpen] = React.useState( true );
    const { t } = useTranslation();
    const handleClose = () => {
        setOpen( false );
        props.onClose();
    };


    return (
        <Dialog
            onClose={handleClose}
            open={open}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {t( 'welcome_back.welcome', { who: localStorage.getItem( 'username' ) } )}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t( 'welcome_back.label' )}:
                </DialogContentText>
                <DialogContentText>
                    {t( 'welcome_back.earnings', { earnings: '0' } )}
                </DialogContentText>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};