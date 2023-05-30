import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleDeleteUser = (id)=>{
    console.log(id)
  }
  const userRoleChanged = (user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: "PATCH",
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
    <div className="w-full md:px-14">
      <SectionTitle
        subtitle="How Many??"
        title="Manage all users"
      ></SectionTitle>
      <div className="mt-5">
        <div className="mt-3 h-16 w-full flex justify-start items-center">
          <p className="uppercase text-base font-semibold">
            Total Users: {users.length}
          </p>
        </div>
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'admin' ? 'admin' : <button onClick={() => userRoleChanged(user)}><FaUserShield className="w-5 h-5 "></FaUserShield></button>}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user._id)}>
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

export default AllUsers;
