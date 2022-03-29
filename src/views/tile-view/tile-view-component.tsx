import './styles.scss';
import { Button, Card, Checkbox, Divider, Grid,
    Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import Tile from '../../components/tile/tile-component';
import { Box } from '@mui/system';
import CustomScroll from 'react-custom-scroll';
import { Scrollbar } from 'react-scrollbars-custom';
import React from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import { render } from '@testing-library/react';
import { BuildingsShop, BuildingsShopsApi, Field, FieldsApi } from '../../api';
import ScrollContainer from 'react-indiana-drag-scroll';


interface IProps{
    navigator: any;
    params: any;
}

interface IState{
    tilesArray: any[];
}

class TileView extends React.Component<IProps, IState> {

    tiles = 10;
    shopBuildings: BuildingsShop[] = [];
    tilesArray: any = [];

    async getBuildings () {
        const buildingsApi = new BuildingsShopsApi();
        buildingsApi.apiBuildingsShopsGet().then(
            result => {
                this.shopBuildings = result.data;
                this.fill();
            }
        );
    }

    async build ( buildingId: number ) {
        const { params } = this.props;
        const { navigator } = this.props;
        const id = params['id'];
        const fieldApi = new FieldsApi();
        const fieldData = {
            'id': id,
            'placedBuilding': {
                'id': buildingId,
                'name': 'string',
                'imageName': 'string',
                'accountingValue': 0,
                'populationValue': 0,
                'numberOfAccountings': 0,
                'accountedCoins': 0,
                'populationNeeded': 0
            }
        } as Field;
        fieldApi.apiFieldsIdPut( id, fieldData ).then(
            result => {
                navigator( '/' );
            }
        );
    }

    fill () {
        console.log( 'asd' );
        for ( let i = 0;i < this.shopBuildings.length;i++ ) {
            this.tilesArray.push( <Box className='card'>
                <Grid container direction='column'
                    alignItems='center'
                    className='card-inside-property'>
                    {this.shopBuildings.at( i )!.name}
                    <img src={
                        require( `../../assets/images/${this.shopBuildings.at( i )!.imageName!}` )
                    } />
                    <Grid container gap='10px' direction='column'>
                        <Grid className='icons' 
                            container direction='row' 
                            justifyContent='space-between'
                            alignItems='center' gap='1rem' width='100%'>
                            <Icon><GroupsIcon/></Icon>
                            <span>{this.shopBuildings.at( i )!.populationValue}</span>
                        </Grid>
                        <Divider/>
                        <Grid className='icons' 
                            container direction='row' 
                            justifyContent='space-between'
                            alignItems='center' gap='1rem' width='100%'>
                            <Icon><AttachMoneyIcon/></Icon>
                            <div>{this.shopBuildings.at( i )!.accountingValue}</div>
                        </Grid>
                        <Divider/>
                        <Grid className='icons' 
                            container direction='row' 
                            justifyContent='space-between'
                            alignItems='center' gap='1rem' width='100%'
                            style={{ padding: '0', marginTop: '1.25rem' }}>
                            <Button className='login-button' 
                                onClick={()=>this.build( this.shopBuildings.at( i )!.id! )}
                                style={{ fontSize: '1.8rem', width: '100%' }}>
                         WYBUDUJ
                            </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </Box> );
        }
        this.setState( {
            tilesArray: this.tilesArray
        } );
    }

    constructor ( props: any ) {
        super( props );
        this.state = {
            tilesArray: []
        };
        this.getBuildings();
    }

    render () {
        return (        
            <Grid container direction='column' className='tile-view'
                justifyContent='center' alignItems='center'> 
                <Tile></Tile>
                <Card className='menu'>
                    <Scrollbar>
                        <ScrollContainer>
                            <Stack alignItems='center' direction="row" spacing={2}>
                                {this.state.tilesArray}
                            </Stack>
                        </ScrollContainer>
                    </Scrollbar>
                </Card>
            </Grid>
        );
    }

}


export default function ( props: any ) {
    const params = useParams();
    const navigator = useNavigate();

    return <TileView {...props} params={params} navigator={navigator}></TileView>;
}
