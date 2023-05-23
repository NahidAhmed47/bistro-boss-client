import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="max-container my-10 md:my-16">
      <SectionTitle
        subtitle="From 11:00am to 10:00pm"
        title="Order online"
      ></SectionTitle>
      <Swiper slidesPerView={5} className="mt-10">
        <SwiperSlide>
          <img src={img1} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Desserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center"> Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p className="uppercase tracking-widest text-2xl font-semibold text-slate-100 -mt-16 text-center">Soups</p>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Category;
