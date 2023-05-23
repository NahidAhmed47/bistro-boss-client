import React from "react";
import { NavLink } from "react-router-dom";
import shopIcon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

const Header = () => {
  return (
    <div className="h-fit py-1 bg-black bg-opacity-40 w-full">
      <div className="max-container flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold uppercase text-white tracking-wide">
            Bistro Boss
          </h1>
          <h1 className="text-lg font-semibold text-white tracking-[8px]">
            Restaurant
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-base font-semibold uppercase flex gap-5 text-white">
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contract"
              className={({isActive}) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Contract us
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({isActive}) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/menu"
              className={({isActive}) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/shop"
              className={({isActive}) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Shop
            </NavLink>
          </div>
          <div>
            <img className="w-[62px] " src={shopIcon} alt="" />
          </div>
          <div className="ml-2">
            <button to="/login" className="text-base tracking-wide font-medium uppercase px-3 py-1 border-b-2 rounded-md border-primary text-primary bg-[#E8E8E8]">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
