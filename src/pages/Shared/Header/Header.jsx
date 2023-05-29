import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import shopIcon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { AuthContext } from "../../../Providers/AuthProviders";
import useCart from "../../../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isLoading, cart] = useCart();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-fit py-1 bg-black bg-opacity-50 w-full fixed z-10">
      <div className="max-container flex justify-between items-center md:px-5 lg:px-8">
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
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contract"
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Contract us
            </NavLink>
            <NavLink
              to="/dashboard/admin/home"
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/shop/salad"
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25]" : "hover:text-primary duration-200"
              }
            >
              Shop
            </NavLink>
          </div>
          <Link to="dashboard/mycart">
            <div className="relative w-[62px] h-fit">
              <img className="w-[62px] " src={shopIcon} alt="" />
              <div className="absolute bottom-[2px] right-[2px] w-[26px] h-[26px] rounded-full bg-[#E8E8E8] flex justify-center items-center">
                <p className="text-base font-bold">{cart?.length || 0}</p>
              </div>
            </div>
          </Link>
          <div className="ml-2">
            {user ? (
              <button onClick={handleLogOut} className="my-btn py-1">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="my-btn py-1">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
