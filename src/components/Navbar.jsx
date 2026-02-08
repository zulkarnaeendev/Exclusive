import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search.png";
import UserIcon from "../assets/Heart.png";
import CartIcon from "../assets/Cart.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex pt-7 pb-6.75 justify-between items-center">
          <img
            src={Logo}
            alt="Tech E-commerce Logo"
            className="pt-1.75 pb-1.75"
          />

          <ul className="flex gap-12 items-center font-medium text-base">
            <NavLink to="/" end className=" hover:border-b-2 border-gray-500 pb-0.5 cursor-pointer">
              Home
            </NavLink>
            <NavLink to="/contact" className=" hover:border-b-2 border-gray-500 pb-0.5 cursor-pointer">
              Contact
            </NavLink>
            <NavLink to="/about" className=" hover:border-b-2 border-gray-500 pb-0.5 cursor-pointer">
              About
            </NavLink>
            <NavLink to="/signup"  className=" hover:border-b-2 border-gray-500 pb-0.5 cursor-pointer">
              Sign Up
            </NavLink>
          </ul>

          <div className="flex gap-6 items-center">
            <div className="flex gap-8.5 items-center bg-[#F5F5F5] pt-1.75 pb-1.75 pr-3 pl-5">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none font-normal text-[12px] placeholder:text-[12px] placeholder:font-normal"
              />
              <img src={SearchIcon} alt="search" className="w-6 h-6" />
            </div>
            <div className="flex gap-4">
              <img src={UserIcon} alt="user" className="w-8 h-8" />
              <img src={CartIcon} alt="cart" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </nav>
      <hr className="font-thin bg-gray-300 h-0.5" />
    </>
  );
};

export default Navbar;
