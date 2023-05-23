import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-container'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;