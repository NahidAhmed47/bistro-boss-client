import React from "react";

const ItemCard = ({item}) => {
    const {image, name, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5 relative">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
        <div className="absolute top-7 right-7 bg-black text-white px-1 rounded">${price}</div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>I{recipe}</p>
        <div className="card-actions">
          <button className="my-btn py-1">ADD To CART</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
