import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import SingleItemMenu from '../../../components/SingleItemMenu';

const OurMenu = () => {
    const [itemData, setItemData] = useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setItemData(data));
    },[])
    console.log(itemData)
    return (
        <div className='my-10 md:my-20 max-container'>
            <SectionTitle title="Our Menu" subtitle='Check It Out'></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-8 md:mt-12'>
                <div className='space-y-5'>
                    {
                        itemData.slice(0, 4).map((item, index)=> <SingleItemMenu key={index} item={item}></SingleItemMenu>)
                    }
                </div>
                <div className='space-y-5'>
                    {
                        itemData.slice(5, 9).map((item, index)=> <SingleItemMenu key={index} item={item}></SingleItemMenu>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurMenu;