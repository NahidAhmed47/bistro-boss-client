import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaCalendar, FaCalendarAlt, FaCommentDots, FaFax, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile max-container ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 w-72 text-base-content bg-[#D1A054]">
          <div className="text-center my-3">
            <h1 className="text-2xl font-bold uppercase text-white tracking-wide">
              Bistro Boss
            </h1>
            <h1 className="text-lg font-semibold text-white tracking-[8px]">
              Restaurant
            </h1>
          </div>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaHome className="text-black w-6 h-6"></FaHome>User Home</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaCalendarAlt className="text-black w-6 h-6"></FaCalendarAlt>Reservation</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaWallet className="text-black w-6 h-6"></FaWallet>Payment History</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaShoppingCart className="text-black w-6 h-6"></FaShoppingCart>My Cart</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaCommentDots className="text-black w-6 h-6"></FaCommentDots>Add review</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaCalendar className="text-black w-6 h-6"></FaCalendar>My Booking</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaHome className="text-black w-6 h-6"></FaHome>Home</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaBars className="text-black w-6 h-6"></FaBars>Menu</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaShoppingBag className="text-black w-6 h-6"></FaShoppingBag>Shop</Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="font-bold font-serif uppercase"><FaFax className="text-black w-6 h-6"></FaFax>Contract</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
