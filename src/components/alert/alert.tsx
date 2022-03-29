import { Alert, Snackbar } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';

interface IProps{
    content: string
}

const AlertHelper = ( props: IProps ) => {
    const [open, setOpen] = React.useState( false );

    const handleClick = () => {
        setOpen( true );
    };

    const handleClose = ( event?: React.SyntheticEvent | Event, reason?: string ) => {
        if ( reason === 'clickaway' ) {
            alert( 'test' );
            return;
        }

        setOpen( false );
    };
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {props.content}
            </Alert>
        </Snackbar>
    );
};

export default AlertHelper;