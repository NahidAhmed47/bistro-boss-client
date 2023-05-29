import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleDeleteUser = (id)=>{
    console.log(id)
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
                  <td>User</td>
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
