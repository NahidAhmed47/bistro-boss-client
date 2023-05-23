import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const ChefRecommends = () => {
    return (
        <div className='my-10 md:my-20 max-container'>
            <SectionTitle title='Chef Recommends' subtitle='Should Try'></SectionTitle>
            <div>
      <Swiper  slidesPerView={3} spaceBetween={50} className="mt-10">
        <SwiperSlide>
            <div className='w-full h-[400px] bg-[#F3F3F3] flex flex-col'>
                <img src={img1} className='h-[60%]' alt="" />
                <div className='bg-[#F3F3F3] p-4 text-center space-y-3'>
                    <h1 className='text-xl font-semibold'>Caeser Salad</h1>
                    <p className='text-sm font-medium'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='my-btn py-2'>Add to Cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[400px] bg-[#F3F3F3] flex flex-col'>
                <img src={img2} className='h-[60%]' alt="" />
                <div className='bg-[#F3F3F3] p-4 text-center space-y-3'>
                    <h1 className='text-xl font-semibold'>Caeser Salad</h1>
                    <p className='text-sm font-medium'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='my-btn py-2'>Add to Cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[400px] bg-[#F3F3F3] flex flex-col'>
                <img src={img3} className='h-[60%]' alt="" />
                <div className='bg-[#F3F3F3] p-4 text-center space-y-3'>
                    <h1 className='text-xl font-semibold'>Caeser Salad</h1>
                    <p className='text-sm font-medium'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='my-btn py-2'>Add to Cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[400px] bg-[#F3F3F3] flex flex-col'>
                <img src={img4} className='h-[60%]' alt="" />
                <div className='bg-[#F3F3F3] p-4 text-center space-y-3'>
                    <h1 className='text-xl font-semibold'>Caeser Salad</h1>
                    <p className='text-sm font-medium'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='my-btn py-2'>Add to Cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[400px] bg-[#F3F3F3] flex flex-col'>
                <img src={img5} className='h-[60%]' alt="" />
                <div className='bg-[#F3F3F3] p-4 text-center space-y-3'>
                    <h1 className='text-xl font-semibold'>Caeser Salad</h1>
                    <p className='text-sm font-medium'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='my-btn py-2'>Add to Cart</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default ChefRecommends;