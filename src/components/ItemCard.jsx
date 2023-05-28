import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ItemCard = ({item}) => {
    const {image, name, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const handleAddToCart = (item) =>{
      if(user && user.email){
        const cartItem = {itemId: _id, name, price, image, email: user.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(cartItem),
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'You need to login first!',
          text: "You won't be able to order this without login!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
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
          <button className="my-btn py-1" onClick={()=> handleAddToCart(item)}>ADD To CART</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
