import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search.png";
import UserIcon from "../assets/Heart.png";
import CartIcon from "../assets/Cart.png";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartdata = useSelector((state) => state.allProduct.cart);
  const wishlistdata = useSelector((state) => state.allProduct.wishlist);



  let navigate = useNavigate();

  const handelcart = () => {
    navigate('/cart');
  }

  const handelheart = () => {
    navigate('/wishlist');
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
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
            <NavLink to="/signup" className=" hover:border-b-2 border-gray-500 pb-0.5 cursor-pointer">
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

              <div onClick={handelheart} className="relative cursor-pointer">
                <img src={UserIcon} alt="user" className="w-8 h-8" />
                <span className="flex justify-center items-center w-5 h-5 rounded-full bg-reddish text-white text-[10px] absolute -top-1 -right-1 z-10">
                  {wishlistdata.length}
                </span>
              </div>
              <div onClick={handelcart} className="relative cursor-pointer">
                <img src={CartIcon} alt="cart" className="w-8 h-8" />
                <span className="flex justify-center items-center w-5 h-5 rounded-full bg-reddish text-white text-[10px] absolute -top-1 -right-1 z-10">
                  {cartdata.length}
                </span>
              </div>
            </div>
          </div>
        </nav>
      <hr className="font-thin bg-gray-300 h-0.5" />
    </>
  );
};

export default Navbar;
