import React from "react";
import SectionTitle from "../../../components/SectionTitle";

const Featured = () => {
  return (
    <div className="max-container w-full my-10 md:my-20 bg-[url('https://i.ibb.co/r6RsmfG/featured.jpg')]  min-h-[700px] bg-cover">
      <div className="w-full min-h-[700px] flex justify-center items-center bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center">
          <SectionTitle
            title="From our menu"
            subtitle="Check It Out"
          ></SectionTitle>
          <div className="md:w-[80%] grid grid-cols-2 mt-8 gap-5 md:gap-8 items-center">
            <img src="https://i.ibb.co/r6RsmfG/featured.jpg" alt="" />
            <div className="text-white">
                <h1>March 20, 2023</h1>
                <h1>WHERE CAN I GET SOME?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="my-btn py-2">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
