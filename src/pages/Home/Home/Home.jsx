import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import OurMenu from '../OurMenu/OurMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <OurMenu></OurMenu>
            <div className='my-10 md:my-20 max-container bg-black h-[200px] flex justify-center items-center'>
                <h1 className='font-mono text-5xl text-white'>Call Us: +88 0192345678910</h1>
            </div>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;