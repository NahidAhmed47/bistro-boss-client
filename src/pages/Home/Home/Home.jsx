import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import OurMenu from '../OurMenu/OurMenu';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;