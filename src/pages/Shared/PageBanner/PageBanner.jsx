import React from 'react';

const PageBanner = ({bannerTitle, subText, img}) => {
    return (
        <div className={` bg-[url('${img}')] bg-no-repeat bg-cover h-[50vh] md:h-[80vh] w-full flex justify-center items-center `}>
      <div className="bg-black h-[40%] bg-opacity-50 w-[50%] text-center md:px-16  flex justify-center items-center">
        <div className="space-y-4">
          <h1 className="text-5xl text-white font-bold tracking-[7px] font-mono uppercase">
            {bannerTitle}
          </h1>
          <p className="text-base text-white uppercase">
            {subText}
          </p>
        </div>
      </div>
    </div>
    );
};

export default PageBanner;