import './styles.scss';
import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Grid } from '@mui/material';

interface IProp{
    style: any
}

export default class CustomDrawer extends React.Component<IProp> {

    render () {
        return (
            <div className='custom-drawer' style={this.props.style}>
                <Scrollbar>
                    <Grid container padding='1rem' gap='10px'>
                        <div className='tekst'>
                            test
                        </div>
                        <div className='tekst'>
                            Lorem ipsum dolor sit amet consectetur,
                             adipisicing elit. Earum consequatur
                              deserunt ducimus, possimus iste ea
                               velit a reprehenderit aliquid,
                                qui doloremque incidunt voluptatem id.
                                 Omnis nobis earum numquam modi consequuntur.
                        </div>
                        <div className='tekst'>
                            test
                        </div>
                        <div className='tekst'>
                            test
                        </div>
                        <div className='tekst'>
                            test
                        </div>
                    </Grid>  
                </Scrollbar>    
            </div>
        );
    }

}