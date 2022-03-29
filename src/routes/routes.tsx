import { Route, Routes } from 'react-router-dom';

import MainScreen from '../views/main-screen/main-screen-component';
import NavBar from '../views/nav-bar/nav-bar-component';
import NotFound from '../views/404/404';
import LoadingScreen from '../views/loding-screen/loding-screen';
import CityView from '../views/city-view/city-view-component';
import TileView from '../views/tile-view/tile-view-component';
import Cloud from '../components/cloud/cloud';
import GameView from '../views/game-view/game-view-component';
import LoginView from '../views/authorization/login-view/login-view';
import RegisterView from '../views/authorization/register-view/register-view';
import { GuardedRoute } from '../utils/guards/guarder-route';


const CustomRoutes = () => 
    <Routes>
        <Route path='/' element={<GuardedRoute/>} key='create'>
            <Route path='/' element={<CityView test={''} />}/>  
            <Route path='main' element={<MainScreen />}/>  
            <Route path='tile/:id' element={<TileView />}/> 
            <Route path='game' element={<GameView />}/> 
        </Route>
        <Route path='login' element={<LoginView />}/> 
        <Route path='register' element={<RegisterView />}/>   
        <Route path='loading' element={<LoadingScreen />}/>  
        <Route path='cloud' element={<Cloud startingPosition={50} />}/>  
        <Route path='*' element = {<NotFound/>}/>
        
    </Routes>
;

export default CustomRoutes;