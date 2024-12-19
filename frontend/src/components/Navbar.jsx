import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import imgOne from "../assets/frontend_assets/jocole.png";
import { ShopContext } from "../context/Shopcontext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch } = useContext(ShopContext);

  const images = [imgOne];
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        {" "}
        <img src={imgOne} alt="" srcset="" className="w-[120px] h-[140px]" />
        <img src={assets.jocole} className="w-36" alt="" srcset="" />
      </Link>
      <ul className=" sm:flex gap-5 text-sm text-gray-700 hidden ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          srcset=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            srcset=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdownn-menu right-0 pt-4">
            <div className="flex flex-col gap-2 py-3 w-36 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profle</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Log out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            srcSet=""
            className="w-5 min-w-5"
          />
        </Link>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Navbar;
