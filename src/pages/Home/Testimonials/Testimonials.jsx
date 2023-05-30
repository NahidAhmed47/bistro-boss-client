import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-two.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-10 md:my-20 max-container">
      <SectionTitle
        title="Testimonials"
        subtitle="What Our Clients Say"
      ></SectionTitle>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={index} className="py-10 px-3 md:px-8">
              <div className="text-center flex flex-col items-center justify-center max-w-[800px] mx-auto space-y-3">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={review.rating}
                  readOnly
                />
                <BsQuote className="w-16 h-16 text-black"></BsQuote>
                <h1 className="text-xl md:text-2xl font-bold ">{review.name}</h1>
                <p>{review.details}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
