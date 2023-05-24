import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import SingleItemMenu from '../../../components/SingleItemMenu';
import useMenu from '../../../hooks/useMenu';

const OurMenu = () => {
    const [menu] = useMenu();
    return (
        <div className='my-10 md:my-20 max-container'>
            <SectionTitle title="Our Menu" subtitle='Check It Out'></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-8 md:mt-12'>
                <div className='space-y-5'>
                    {
                        menu.slice(0, 4).map((item, index)=> <SingleItemMenu key={index} item={item}></SingleItemMenu>)
                    }
                </div>
                <div className='space-y-5'>
                    {
                        menu.slice(5, 9).map((item, index)=> <SingleItemMenu key={index} item={item}></SingleItemMenu>)
                    }
                </div>
            </div>
            <div className='text-center mt-10'>
                <button className='my-btn py-2'>View Full Menu</button>
            </div>
        </div>
    );
};

export default OurMenu;