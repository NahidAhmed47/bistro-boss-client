import React from "react";
import PageBanner from "../Shared/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import SingleItemMenu from "../../components/SingleItemMenu";
import SectionBanner from "../Shared/SectionBanner/SectionBanner";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <PageBanner
        subText="Would you like to try a dish?"
        bannerTitle="our menu"
        img="https://i.ibb.co/8skt1MP/banner3.jpg"
      ></PageBanner>
      {/* offered  section */}
      <div className="max-container my-10 md:my-20 ">
        <SectionTitle
          subtitle="Don't miss"
          title="Today's offer"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 mt-10 gap-8">
          {offered.map((item) => (
            <SingleItemMenu key={item._id} item={item}></SingleItemMenu>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <button className="my-btn py-2">Order Your Favorite Food</button>
        </div>
        {/* desserts section added */}
        <div>
          <SectionBanner title='Desserts'></SectionBanner>
          <div className="grid md:grid-cols-2 mt-10 gap-8">
          {desserts.map((item) => (
            <SingleItemMenu key={item._id} item={item}></SingleItemMenu>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <button className="my-btn py-2">Order Your Favorite Food</button>
        </div>
        </div>
        {/* pizza section added */}
        <div>
          <SectionBanner title='Pizza'></SectionBanner>
          <div className="grid md:grid-cols-2 mt-10 gap-8">
          {pizza.map((item) => (
            <SingleItemMenu key={item._id} item={item}></SingleItemMenu>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <button className="my-btn py-2">Order Your Favorite Food</button>
        </div>
        </div>
        {/* salads section added */}
        <div>
          <SectionBanner title='salads'></SectionBanner>
          <div className="grid md:grid-cols-2 mt-10 gap-8">
          {salads.map((item) => (
            <SingleItemMenu key={item._id} item={item}></SingleItemMenu>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <button className="my-btn py-2">Order Your Favorite Food</button>
        </div>
        </div>
        {/* soups section added */}
        <div>
          <SectionBanner title='soups'></SectionBanner>
          <div className="grid md:grid-cols-2 mt-10 gap-8">
          {soups.map((item) => (
            <SingleItemMenu key={item._id} item={item}></SingleItemMenu>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <button className="my-btn py-2">Order Your Favorite Food</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
