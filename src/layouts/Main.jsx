import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const onHeaderChange = location.pathname.includes('login') || location.pathname.includes('registration');
    return (
        <div>
            {
                onHeaderChange ? ' ' : <Header></Header>
            }
            <Outlet></Outlet>
            {
                onHeaderChange ? ' ' : <Footer></Footer>
            }
        </div>
    );
};

export default Main;