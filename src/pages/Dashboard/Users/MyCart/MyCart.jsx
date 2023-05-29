import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useCart from "../../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [, cart, refetch] = useCart();
  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your item has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          });
      }
    });
  };
  return (
    <div className="w-full md:px-14">
      <SectionTitle subtitle="My Cart" title="Wanna add more"></SectionTitle>
      <div className="mt-5">
        <div className="my-3 h-16 w-full flex justify-between items-center">
          <p className="uppercase text-base font-semibold">
            Total Orders: {cart.length}
          </p>
          <p className="uppercase text-base font-semibold">
            Total Price: ${cart?.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
          <button className="my-btn">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-36 h-auto" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleDeleteCart(item._id)}>
                      <FaRegTrashAlt className="w-5 h-5 text-red-500 hover:text-red-700"></FaRegTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
