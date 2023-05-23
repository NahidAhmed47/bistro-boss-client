import React from 'react';

const SingleItemMenu = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className='flex gap-4 md:gap-7'>
            <img className='w-[118px] h-[104px] rounded-l-none rounded-b-[200px] rounded-r-[200px] ' src={image} alt="" />
            <div className='space-y-2'>
                <h1 className='uppercase text-xl text-[#151515]'>{name}-----------</h1>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-primary font-medium text-lg'>${price}</p>
        </div>
    );
};

export default SingleItemMenu;