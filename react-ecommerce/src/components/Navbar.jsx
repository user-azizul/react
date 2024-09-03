import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/GlobalContext";

const Navbar = () => {
  const { setShowSearch, showSearch } = useShop();
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={`/`}>
        {" "}
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>
      <ul className="hidden main-nav sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center  gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>{" "}
        <NavLink
          to="/collections"
          className="flex flex-col items-center  gap-1"
        >
          <p>COLLECTONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>{" "}
        <NavLink to="/about" className="flex flex-col items-center  gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>{" "}
        <NavLink to="/contact" className="flex flex-col items-center  gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black"> Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu icon"
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>
      {/* sidebar menu for small screen  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all${
          visible ? " w-full" : " w-0"
        }`}
      >
        <div className="flex sm:hidden flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:text-black"
          >
            <img
              className="h-4 roteate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 mbl-Nav-item pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 mbl-Nav-item pl-6 border"
            to="/collections"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 mbl-Nav-item pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 mbl-Nav-item pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
