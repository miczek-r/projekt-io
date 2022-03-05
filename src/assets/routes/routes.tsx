import { Route, Routes } from 'react-router-dom';
import NotFound from '../../views/404/404';

import Home from '../../views/home/home-component';
import NavBar from '../../views/nav-bar/nav-bar-component';

const CustomRoutes = () => 
    <Routes>
        <Route path='/' element={<NavBar />} key='create'>
            <Route path='/' element={<Home />} key='create'/>  
        </Route>
        <Route path='*' element = {<NotFound/>}/>
        
    </Routes>
;

export default CustomRoutes;