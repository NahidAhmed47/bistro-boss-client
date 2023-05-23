import React from 'react';

const SectionTitle = ({subtitle, title}) => {
    return (
        <div className='text-center max-w-[280px] mx-auto space-y-2'>
            <h1 className='text-primary italic md:text-lg'>---{subtitle}---</h1>
            <h1 className='uppercase border-y-2 text-xl md:text-3xl font-semibold py-1 font-mono'>{title}</h1>
        </div>
    );
};

export default SectionTitle;