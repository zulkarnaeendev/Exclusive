import React from "react";
import { NavLink } from "react-router";

const Deal = () => {
  return (
    <div className="bg-black py-3 pl-165">
      <div className="container flex gap-70 items-center mx-auto px-4 md:px-0">
        <p className="text-[#FAFAFA] text-sm font-normal text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <NavLink to="/shop" className="text-white font-semibold underline ml-2">
            ShopNow
          </NavLink>
        </p>
        <div className="">
          <select name="language"className="text-white bg-transparent border-none cursor-pointer text-sm outline-none">
            <option value="en" className="text-black">English</option>
            <option value="zh" className="text-black">Mandarin</option>
            <option value="hi" className="text-black">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Deal;
