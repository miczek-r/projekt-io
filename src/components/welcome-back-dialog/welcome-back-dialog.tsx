import { Dialog, DialogActions, 
    DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { handleThemeChange } from '../../views/nav-bar/nav-bar-hoods';

interface IProps{
    onClose: () => void
}

export const WelcomeBackDialog = ( props: IProps ) => {
    const [open, setOpen] = React.useState( true );
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
                {'Witaj z powrotem'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                Pod twoją nieobecność:
                </DialogContentText>
                <DialogContentText>
                Zarobiłeś: 10 dolanów
                </DialogContentText>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};