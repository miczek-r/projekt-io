import { Route, Routes } from 'react-router-dom';

import Home from '../../views/home/home-component';
import MainScreen from '../../views/main-screen/main-screen-component';
import NavBar from '../../views/nav-bar/nav-bar-component';
import NotFound from '../../views/404/404';


const CustomRoutes = () => 
    <Routes>
        <Route path='/' element={<NavBar />} key='create'>
            <Route path='/' element={<Home />}/>  
            <Route path='main' element={<MainScreen />}/>  
        </Route>
        <Route path='*' element = {<NotFound/>}/>
        
    </Routes>
;

export default CustomRoutes;