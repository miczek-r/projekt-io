import { Route, Routes } from 'react-router-dom';

import Home from '../../views/home/home-component';
import MainScreen from '../../views/main-screen/main-screen-component';
import NavBar from '../../views/nav-bar/nav-bar-component';
import NotFound from '../../views/404/404';
import LoadingScreen from '../../views/loding-screen/loding-screen';
import CityView from '../../views/city-view/city-view-component';
import TileView from '../../views/tile-view/tile-view-component';


const CustomRoutes = () => 
    <Routes>
        <Route path='/' element={<NavBar />} key='create'>
            <Route path='/' element={<CityView />}/>  
            <Route path='main' element={<MainScreen />}/>  
            <Route path='/home' element={<Home />}/>  
            <Route path='tile' element={<TileView />}/>  
        </Route>
        <Route path='loading' element={<LoadingScreen />}/>  
        <Route path='*' element = {<NotFound/>}/>
        
    </Routes>
;

export default CustomRoutes;