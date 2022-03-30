import { Component, useEffect } from 'react';
import { IndexRouteProps, LayoutRouteProps, 
    Navigate, Outlet, PathRouteProps, Route } from 'react-router-dom';
import { UsersProgressInfoesApi } from '../../api/api';
import NavBar from '../../views/nav-bar/nav-bar-component';

export const GuardedRoute = () => {
    const auth = localStorage.getItem( 'userID' );

    const getUserInfo = () =>{
        const userInfoApi = new UsersProgressInfoesApi();
        const id = localStorage.getItem( 'userID' )!;
        userInfoApi.getUsersProgressInfoByUserIDIdGet( id ).then(
            result => {
                const oldMoney: number = Number.parseInt( localStorage.getItem( 'money' ) ?? '0' );
                localStorage.setItem( 'population', result.data?.population?.toString() ?? '0' );
                localStorage.setItem( 'money', result.data?.coins?.toString() ?? '0' );
                const newMoney: number = result.data?.coins ?? 0;
                localStorage.setItem( 'gain', ( newMoney - oldMoney ).toString() );
            }

        );
    };

    useEffect( () => {
        if ( auth )
            getUserInfo();
    }, [] );

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <NavBar /> : <Navigate to="/login" />;
};
